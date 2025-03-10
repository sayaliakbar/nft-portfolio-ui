import React from "react";

import "./about.css";

import { Heading, BgGradients, ImageCard } from "../../components/index.js";
import { Hero } from "../../containers/About/index.js";

import sixFaces01 from "../../assets/images/sixfaces01.png";

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
        <Hero />
        <ImageCard
          button={false}
          imageSource={sixFaces01}
          heading="History"
          title="Born History of Yorfy NFT"
          body={
            <>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
              <br />
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </>
          }
        />
      </div>
    </>
  );
};

export default About;
