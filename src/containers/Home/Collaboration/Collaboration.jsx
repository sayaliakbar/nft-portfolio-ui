import React from "react";
import "./collaboration.css";
import { logoipsum01, logoipsum02, logoipsum03, logoipsum04 } from "./import";

const Collaboration = () => {
  return (
    <div className="yorfy__collaboration section__padding">
      <div className="yorfy__collaboration-heading">
        <h6>Collaboration</h6>
        <h2>Our Partners</h2>
      </div>
      <div className="yorfy__collaboration-brands">
        <img src={logoipsum01} alt="Logoipsum01" />
        <img src={logoipsum02} alt="Logoipsum02" />
        <img src={logoipsum03} alt="Logoipsum03" />
        <img src={logoipsum04} alt="Logoipsum04" />
      </div>
    </div>
  );
};

export default Collaboration;
