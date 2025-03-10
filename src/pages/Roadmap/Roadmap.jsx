import React from "react";

import "./roadmap.css";
import { BgGradients, Heading, Button } from "../../components/index.js";
import { Content } from "../../containers/Roadmap/index.js";

const Roadmap = () => {
  return (
    <>
      <BgGradients />
      <div className="yorfy__roadmap">
        <Heading
          title="See How We Create The Yorfy"
          heading="Roadmap"
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <Content />
        <Heading
          heading="Join Our Team"
          title="Wan’t to Contribute Develop The Yorfy? Send Your Resume Now"
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <Button text="Send Your Resume" size="large" />
      </div>
      <BgGradients />
    </>
  );
};

export default Roadmap;
