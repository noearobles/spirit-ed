import React, { useState } from "react";
import "./Wine.css";
import axios from "axios";
import wine from "../../assets/wine.mp4";
const WineRecognition = () => {
  const [results, setResults] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const vidRef = React.useRef();
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setPreviewImage(null);
    }
  };

  const recognizeWine = async () => {
    const formData = new FormData();
    formData.append("image", selectedFile);

    const options = {
      method: "POST",
      url: "https://wine-recognition2.p.rapidapi.com/v1/results?url=",
      headers: {
        "content-type": "multipart/form-data",
        "X-RapidAPI-Key": "b5c106c63amshdfb6ed765f2c15ep126e86jsnbda77794a9f0",
        "X-RapidAPI-Host": "wine-recognition2.p.rapidapi.com",
      },
      data: formData,
    };

    try {
      setLoading(true);
      const response = await axios.request(options);
      setResults(response.data.results);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="app__header app__wrapper section__padding"
      style={{ flexDirection: "column" }}
    >
      <div className="app__newsletter-heading">
        <h1 className="headtext__cormorant">Wine Identifier</h1>
        <div className="app__newsletter-input flex__center">
          <input
            type="file"
            onChange={handleFileUpload}
            placeholder="Upload Photo"
          />
          <button
            type="button"
            onClick={recognizeWine}
            disabled={!selectedFile}
            style={{ height: "100%" }}
          >
            Recognize Wine
          </button>
        </div>
      </div>

      <div>
        {loading ? ( // If loading, show loading spinner
          <div className="app__video">
            <div style={{ textAlign: "center", backgroundColor: "#0C0C0C" }}>
              {" "}
              <p className="p__cormorant">Searching For Wine</p>
            </div>
            <video
              ref={vidRef}
              src={wine}
              type="video/mp4"
              loop
              controls={false}
              autoPlay={true}
              muted
            />
            {/* <div className="app__video-overlay flex__center">
            <div
              className="app__video-overlay_circle flex__center"
              onClick={() => {
                setPlayVideo(!playVideo);
                if (playVideo) {
                  vidRef.current.pause();
                } else {
                  vidRef.current.play();
                }
              }}
            >
              {playVideo ? (
                <BsPauseFill color="#fff" fontSize={30} />
              ) : (
                <BsFillPlayFill color="#fff" fontSize={30} />
              )}
            </div> 
            </div> */}
          </div>
        ) : // If not loading, show results or "No results found"
        Array.isArray(results) && results.length > 0 ? (
          results.map((result, index) => (
            <div key={index}>
              {previewImage && (
                <div className="app__wrapper_img" style={{ margin: "0" }}>
                  <img
                    src={previewImage}
                    alt="Preview"
                    style={{ width: "35%" }}
                  />
                </div>
              )}
              <ol>
                {Object.entries(result.entities[0].classes)
                  .slice(0, 3)
                  .map(([className, confidence]) => (
                    <li
                      className="p__opensans"
                      style={{ margin: "2rem 0" }}
                      key={className}
                    >
                      Wine: {className} | Probabilty:{" "}
                      {Math.round(confidence * 100)}%
                    </li>
                  ))}
              </ol>
            </div>
          ))
        ) : (
          <p>No results found</p>
        )}
      </div>
    </div>
  );
};

export default WineRecognition;
