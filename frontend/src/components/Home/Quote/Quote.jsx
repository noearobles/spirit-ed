import React from "react";
import { images } from "../constants";
import "./Quote.css";
import quotes from "./QuoteDb";

export default function Quote() {
  const [quote, setQuote] = React.useState("");
  const [author, setAuthor] = React.useState("");
  const [image, setImage] = React.useState("");

  React.useEffect(() => {
    getQuote();
  }, []);

  function getQuote() {
    let dataQuotes = quotes;
    let randomNum = Math.floor(Math.random() * dataQuotes.length);
    let randomQuote = dataQuotes[randomNum];

    setQuote(randomQuote.quote);
    setAuthor(randomQuote.author);
    setImage(randomQuote.image);
  }
  return (
    <div className="app__bg app__wrapper section__padding">
      <div className="app__wrapper_img app__wrapper_img-reverse">
        <img src={image} alt="chef_image" />
      </div>
      <div className="app__wrapper_info">
        <div style={{ marginBottom: "1rem" }}>
          <div>
            {" "}
            <p className="p__cormorant">Their Word</p>
            <div
              className="app__menuitem-dash"
              style={{ marginBottom: "1rem", width: "100%" }}
            />
          </div>
        </div>
        <h1 className="headtext__cormorant">A Little Wisdom</h1>

        <div className="app__chef-content">
          <div className="app__chef-content_quote">
            <img src={images.quote} alt="quote_image" />
            <p className="p__opensans">{quote}&quot;</p>
          </div>
        </div>

        <div className="app__chef-sign">
          <p>{author}</p>
          {/* <p className="p__opensans">Chef & Founder</p>
          <img src={images.sign} alt="sign_image" /> */}
        </div>
      </div>
    </div>
  );
}
