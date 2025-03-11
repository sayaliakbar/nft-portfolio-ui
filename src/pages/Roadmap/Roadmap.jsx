import React from "react";

import "./roadmap.css";
import { Button, Header } from "../../components/index.js";
import { Content } from "../../containers/Roadmap/index.js";
import { useNavigate } from "react-router-dom";

const Roadmap = () => {
  const Navigate = useNavigate();
  return (
    <>
      <div className="yorfy__roadmap">
        <Header
          title="See How We Create The Yorfy"
          heading="Roadmap"
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <Content />
        <Header
          heading="Join Our Team"
          title="Wan’t to Contribute Develop The Yorfy? Send Your Resume Now"
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <Button
          text="Send Your Resume"
          size="large"
          onClick={() => Navigate("/error")}
        />
      </div>
    </>
  );
};

export default Roadmap;
