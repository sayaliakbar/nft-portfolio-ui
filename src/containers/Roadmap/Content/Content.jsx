import React from "react";
import "./content.css";
import { ImageCard } from "../../../components";
import {
  sixfaces01,
  sixfaces02,
  sixfaces03,
  sixfaces04,
  sixfaces05,
} from "./imports";

const roadmapData = [
  {
    imageSource: sixfaces01,
    button: "Done",
    heading: "20% Progress",
    title: "Created Collection",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    imageSource: sixfaces02,
    button: "Done",
    heading: "40% Progress",
    title: "Publications",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    imageSource: sixfaces03,
    button: "Done",
    heading: "60% Progress",
    title: "Live Events",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    imageSource: sixfaces04,
    button: "On Going",
    heading: "80% Progress",
    title: "Prizes",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    imageSource: sixfaces05,
    button: "On Going",
    heading: "20% Progress",
    title: "Metaverse",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

const Content = () => {
  return (
    <div className="yorfy__roadmap-content">
      {roadmapData &&
        roadmapData.map((item, index) => (
          <ImageCard
            key={index}
            imageSource={item.imageSource}
            button={item.button}
            heading={item.heading}
            title={item.title}
            body={item.body}
          />
        ))}
    </div>
  );
};

export default Content;
