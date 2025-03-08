import React from "react";

import "./navbar.css";
import logo from "../../assets/logo.svg";
import arrowDropDown from "../../assets/arrow_drop_down.svg";
import menu from "../../assets/menu.svg";
import Button from "../Button/Button.jsx";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  console.log(currentPath);

  return (
    <div className="yorfy__navbar">
      <div className="yorfy__navbar-links">
        <div className="yorfy__navbar-links_logo">
          <a href="/">
            <img src={logo} alt="Logo" />
            <h5>YORFY</h5>
          </a>
        </div>
        <div className="yorfy__navbar-links_container ">
          <p
            className={`paragraph-caption ${
              currentPath === "/" ? "link-medium link-bold" : ""
            }`}
          >
            <a href="/">Home</a>
            <img src={arrowDropDown} alt="arrow drop down" />
          </p>
          <p
            className={`paragraph-caption ${
              currentPath === "/nft" ? "link-medium link-bold" : ""
            }`}
          >
            <a href="/nft">NFT</a>
          </p>
          <p
            className={`paragraph-caption ${
              currentPath === "/roadmap" ? "link-medium link-bold" : ""
            }`}
          >
            <a href="/roadmap">Roadmap</a>
          </p>
          <p
            className={`paragraph-caption ${
              currentPath === "/aboutus" ? "link-medium link-bold" : ""
            }`}
          >
            <a href="/aboutus">About Us</a>
          </p>
          <p
            className={`paragraph-caption ${
              currentPath === "/contactus" ? "link-medium link-bold" : ""
            }`}
          >
            <a href="/contactus">Contact Us</a>
          </p>
          <p
            className={`paragraph-caption ${
              currentPath === "/pages" ? "link-medium link-bold" : ""
            }`}
          >
            <a href="/pages">Pages</a>
            <img src={arrowDropDown} alt="Arrow Drop Down" />
          </p>
        </div>
      </div>
      <div className="yorfy__navbar-button">
        <img src={menu} alt="Menu" />
        <Button
          text="Join Us"
          disabled={false}
          size="medium"
          onClick={() => console.log("clicked")}
          type="primary"
        />
      </div>
    </div>
  );
};

export default Navbar;
