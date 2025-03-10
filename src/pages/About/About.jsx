import React from "react";

import "./about.css";

import { Heading, BgGradients } from "../../components/index.js";

const About = () => {
  return (
    <>
      <BgGradients />
      <div className="yorfy__aboutUs section__margin">
        <Heading
          heading="Yorfy Story"
          title="About Us"
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
      </div>
    </>
  );
};

export default About;
