import { useRef, useState, useEffect, useContext } from "react";
import AuthContext from "../../context/AuthProvider";
import "./Login.css";
import axios from "../../api/Axios";
import { Link } from "react-router-dom";
const LOGIN_URL = "/auth/login";

const Login = () => {
  const { setAuth } = useContext(AuthContext);
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);
  const storeAuthentication = (token, user) => {
    localStorage.setItem("user", JSON.stringify(user));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios
      .post(LOGIN_URL, JSON.stringify({ user, pwd }), {
        withCredentials: true,
      })
      .catch((err) => {
        if (!err?.response) {
          setErrMsg("No Server Response");
          setSuccess(false);
        } else if (err.response?.status === 400) {
          setErrMsg("Missing Username or Password");
          setSuccess(false);
        } else if (err.response?.status === 401) {
          setErrMsg("Unauthorized");
          setSuccess(false);
        } else {
          setErrMsg("Login Failed");
          setSuccess(false);
        }
      });

    if (response && response.data) {
      const { token, user } = response.data;
      storeAuthentication(token, user);
      setAuth({ user, pwd });
      setUser("");
      setPwd("");
      setSuccess(true);
      alert(`Welcome back ${user}, Authenticating...`);
    }

    errRef.current.focus();
  };

  return (
    <>
      {success ? (
        <div className="app__newsletter">
          <h1 className="headtext__cormorant">You Are Logged In</h1> <br />
          <p className="p__cormorant" style={{ color: "#DCCA87" }}>
            <Link to={"home"}>Go to Home</Link>
            <br />
          </p>
          <div className="app__menuitem-dash" />
        </div>
      ) : (
        <div className="app__newsletter">
          <p
            ref={errRef}
            className={errMsg ? "p__opensans" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <h1 className="headtext__cormorant">Sign In</h1>{" "}
          <div className="app__newsletter-input">
            <form onSubmit={handleSubmit}>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div
                  style={{
                    display: "flex",
                    marginBottom: "1rem",
                    paddingInline: "1rem",
                  }}
                >
                  <input
                    className="p__opensans"
                    style={{ textTransform: "unset", marginRight: "0.5rem" }}
                    placeholder="Username"
                    type="text"
                    id="username"
                    ref={userRef}
                    autoComplete="off"
                    onChange={(e) => setUser(e.target.value)}
                    value={user}
                    required
                  />

                  <input
                    className="p__opensans"
                    style={{ textTransform: "unset" }}
                    placeholder="Password"
                    type="password"
                    id="password"
                    onChange={(e) => setPwd(e.target.value)}
                    value={pwd}
                    required
                  />
                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <button
                    style={{ marginRight: "0.5rem" }}
                    className="custom__button"
                  >
                    Sign In
                  </button>
                </div>
              </div>
            </form>
          </div>{" "}
          <div>
            <p
              className="p__cormorant"
              style={{ color: "#DCCA87", marginTop: "2rem" }}
            >
              <Link to={"/register"}> Need an Account?</Link>

              <br />
            </p>
            <div className="app__menuitem-dash" />
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
