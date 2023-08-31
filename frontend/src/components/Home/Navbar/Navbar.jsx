import React, { useContext } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";

import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <h1 className="app__nav-h1">Spirit-Ed</h1>{" "}
        {/* <img src={images.logoIcon} alt="app__logo" /> */}
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans">
          <Link to={"/"}>Home</Link>
        </li>
        <li className="p__opensans">
          <Link to={"about"}>About</Link>
        </li>
        <li className="p__opensans">
          <Link to={"drinks"}>Drinks</Link>
        </li>
        <li className="p__opensans">
          <Link to={"history"}>History</Link>
        </li>
        <li className="p__opensans">
          <Link to={"contact"}>Contact</Link>
        </li>
      </ul>
      {/* 
      <div className="app__navbar-login">
        <Link to={"login"} className="p__opensans">
          Log In | Register
        </Link>

        {/* <Link href="/" className="p__opensans">
          Sign Up
        </Link> */}

      <div />
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu
              fontSize={27}
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="app__navbar-smallscreen_links">
              <li>
                <Link to={"/"} onClick={() => setToggleMenu(false)}>
                  Home
                </Link>
              </li>
              <li>
                <Link to={"about"} onClick={() => setToggleMenu(false)}>
                  About
                </Link>
              </li>
              <li>
                <Link to={"drinks"} onClick={() => setToggleMenu(false)}>
                  Drinks
                </Link>
              </li>
              <li>
                <Link to={"history"} onClick={() => setToggleMenu(false)}>
                  History
                </Link>
              </li>
              <li>
                <Link to={"contact"} onClick={() => setToggleMenu(false)}>
                  Contact
                </Link>
              </li>
              {/* <li>
                <Link to={"login"} onClick={() => setToggleMenu(false)}>
                  Log In | Register
                </Link>
              </li>{" "} */}
              {/* <li>
                <Link href="/" onClick={() => setToggleMenu(false)}>
                  Sign Up
                </Link>
              </li> */}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
