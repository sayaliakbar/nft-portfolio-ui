import React from "react";

import "./footer.css";

import { facebook, linkedin, instagram, youtube, company } from "./imports";

const Footer = () => {
  return (
    <div className="yorfy__footer section__padding">
      <div className="yorfy__footer-logos">
        <div className="yorfy__footer-logos__company">
          <img src={company} alt="Company" />
          <h5>YORFY</h5>
        </div>
        <div className="yorfy__footer-logos__social">
          <img src={facebook} alt="facebook" />
          <img src={instagram} alt="instagram" />
          <img src={linkedin} alt="linkedin" />
          <img src={youtube} alt="youtube" />
        </div>
      </div>
      <div className="yorfy__footer-divider" />
      <div className="yorfy__footer-credits">
        <p>© 2022 Yorfy Template • All Rights Reserved</p>
        <p>Made With Love by Ali Akbar</p>
      </div>
    </div>
  );
};

export default Footer;
