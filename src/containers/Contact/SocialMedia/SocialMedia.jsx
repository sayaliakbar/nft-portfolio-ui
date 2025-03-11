import React from "react";

import { facebook, linkedin, youtube, instagram } from "./imports";

import { PointCard } from "../../../components";

const socialMediaData = [
  { imageSource: facebook, title: "Yorfy Collection", body: "Facebook" },
  { imageSource: instagram, title: "@yorfycollection", body: "Instagram" },
  { imageSource: linkedin, title: "Yorfy Studio", body: "LinkedIn" },
  { imageSource: youtube, title: "Life at Yorfy", body: "Youtube" },
];

import "./socialmedia.css";
const SocialMedia = () => {
  return (
    <div className="yorfy__contactUs-socialMedia">
      {socialMediaData &&
        socialMediaData.map((items, index) => (
          <PointCard
            key={index}
            imageSource={items.imageSource}
            title={items.title}
            body={items.body}
          />
        ))}
    </div>
  );
};

export default SocialMedia;
