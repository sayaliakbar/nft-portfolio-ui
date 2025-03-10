import React from "react";
import "./benefits.css";
import { Heading, PointCard } from "../../../components/index.js";
import benefitsCheck from "../../../assets/icons/benefits-check-icon.svg";
const Benefits = () => {
  return (
    <div className="yorfy__nft-benefits section__padding">
      <Heading
        heading="Benefits"
        title="Why You Should Buy Yorfy for Collection?"
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <div className="yorfy__nft-benefits__content">
        <PointCard
          imageSource={benefitsCheck}
          title="Original Design"
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et."
        />
        <PointCard
          imageSource={benefitsCheck}
          title="Eye Catching"
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et."
        />
        <PointCard
          imageSource={benefitsCheck}
          title="Up to Date"
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et."
        />
      </div>
    </div>
  );
};

export default Benefits;
