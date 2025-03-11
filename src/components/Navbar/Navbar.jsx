import React from "react";

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

  const navLinks = [
    { to: "/", text: "Home" },
    { to: "/nft", text: "NFT" },
    { to: "/roadmap", text: "Roadmap" },
    { to: "/aboutus", text: "About Us" },
    { to: "/contactus", text: "Contact Us" },
    { to: "/pages", text: "Pages", hasDropdown: true },
  ];

  const NavLink = ({ to, text, hasDropdown }) => (
    <p
      className={`paragraph-caption ${
        currentPath === to ? "link-medium link-bold" : ""
      }`}
    >
      <a href={to}>{text}</a>
      {hasDropdown && (
        <img
          className="yorfy__navbar-links_container-dropDownIcon"
          src={arrowDropDownActive}
          alt="Arrow dropdown"
        />
      )}
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
        <img src={menu} alt="Menu" />
        <Button
          text="Join Us"
          style="primary"
          disabled={false}
          size="medium"
          onClick={() => navigate("/error")}
        />
      </div>
    </div>
  );
};

export default Navbar;
