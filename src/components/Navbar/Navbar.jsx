import React from "react";
import { useState } from "react";

import "./navbar.css";
import logo from "../../assets/logo.svg";
import arrowDropDownActive from "../../assets/icons/arrow_drop_down_active.svg";
import menu from "../../assets/icons/menu.svg";
import Button from "../Button/Button.jsx";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const navigate = useNavigate();

  const [toggleMenu, setToggleMenu] = useState(false);

  const navLinks = [
    { to: "/", text: "Home" },
    { to: "/nft", text: "NFT" },
    { to: "/roadmap", text: "Roadmap" },
    { to: "/aboutus", text: "About Us" },
    { to: "/contactus", text: "Contact Us" },
  ];

  const NavLink = ({ to, text }) => (
    <p
      className={`paragraph-caption ${
        currentPath === to ? "link-medium link-bold" : ""
      }`}
    >
      <a href={to}>{text}</a>
    </p>
  );

  return (
    <div className="yorfy__navbar">
      <div className="yorfy__navbar-links">
        <div className="yorfy__navbar-links_logo">
          <a href="/">
            <img src={logo} alt="Logo" />
            <h5>YORFY</h5>
          </a>
        </div>
        <div className="yorfy__navbar-links_container">
          {navLinks.map((link, index) => (
            <NavLink key={index} {...link} />
          ))}
        </div>
      </div>
      <div className="yorfy__navbar-button">
        <img
          src={menu}
          alt="Menu"
          onClick={() => setToggleMenu((prev) => !prev)}
        />
        <Button
          text="Join Us"
          style="primary"
          disabled={false}
          size="medium"
          onClick={() => navigate("/error")}
        />
      </div>
      {toggleMenu && (
        <div className="yorfy__navbar-menu">
          <div className="yorfy__navbar-menu_container">
            <div className="yorfy__navbar-menu_container-links">
              {navLinks.map((link, index) => (
                <NavLink key={index} {...link} />
              ))}
              <div className="yorfy__navbar-menu_container-links-sign">
                <p>Sign in</p>
                <button type="button">Sign up</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
