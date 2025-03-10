import React from "react";

import "./timeline.css";
import {
  percent20,
  percent40,
  percent60,
  percent80,
  percent100,
} from "./imports.js";

import { Heading, PointCard } from "../../../components/index.js";

const pointCardData = [
  {
    title: "Created Collection",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageSource: percent20,
    button: "Done",
  },
  {
    title: "Publications",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageSource: percent40,
    button: "Done",
  },
  {
    title: "Live Events",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageSource: percent60,
    button: "Done",
  },
  {
    title: "Prizes",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageSource: percent80,
    button: "On Going",
  },
  {
    title: "Metaverse",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageSource: percent100,
    button: "On Going",
  },
];

const Timeline = () => {
  return (
    <div className="yorfy__nft__timeline section__padding">
      <div className="yorfy__nft__timeline-heading">
        <Heading
          title="Yorfy Roadmap"
          heading="Timeline"
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
      </div>
      <div className="yorfy__nft__timeline-cards">
        {pointCardData &&
          pointCardData.map((items, index) => (
            <PointCard
              key={index}
              imageSource={items.imageSource}
              title={items.title}
              body={items.body}
              button={items.button}
            />
          ))}
      </div>
    </div>
  );
};

export default Timeline;
