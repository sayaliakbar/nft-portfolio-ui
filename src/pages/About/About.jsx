import React from "react";

import "./about.css";

import {
  sixfaces01,
  sixfaces02,
  sixfaces03,
  sixfaces04,
  sixfaces05,
} from "./imports.js";

const teamHeading = {
  heading: "Our Team",
  title: "Behind the Yorfy NFT",
  body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
};
const investorHeading = {
  heading: "Investor",
  title: "Special Person from Yorfy",
  body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
};

const teamData = [
  { title: "Shoo Phar Dhie", imageSource: sixfaces01, body: "Founder" },
  { title: "Shoo Phar Mhan", imageSource: sixfaces02, body: "Illustrator" },
  { title: "Shoo Khier Mhan", imageSource: sixfaces03, body: "UI/UX Designer" },
  {
    title: "Shoo Yhan Tho",
    imageSource: sixfaces04,
    body: "Front End Developer",
  },
  {
    title: "Shoo Mhar Nhie",
    imageSource: sixfaces05,
    body: "Backend Developer",
  },
  {
    title: "Shoo Thar Mhan",
    imageSource: sixfaces01,
    body: "Quality Assurance",
  },
];

const investorData = [
  { title: "Mhar Yho Nho", imageSource: sixfaces01, body: "Investor" },
  { title: "Mhar Han Tho", imageSource: sixfaces02, body: "Investor" },
  { title: "Mhar Jhu Qhi", imageSource: sixfaces03, body: "Investor" },
];

import {
  Heading,
  ImageCard,
  Collection,
  Header,
} from "../../components/index.js";
import { Hero } from "../../containers/About/index.js";

import sixFaces01 from "../../assets/images/sixfaces01.png";

const About = () => {
  return (
    <>
      <div className="yorfy__aboutUs">
        <Header
          heading="Yorfy Story"
          title="About Us"
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <div className="yorfy__aboutUs-container section__margin">
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
          <Collection nftCollectionData={teamData} heading={teamHeading} />
          <Collection
            nftCollectionData={investorData}
            heading={investorHeading}
          />
        </div>
      </div>
    </>
  );
};

export default About;
