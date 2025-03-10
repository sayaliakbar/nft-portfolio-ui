import React from "react";
import "./benefits.css";
import { Heading } from "../../../components/index.js";
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
        <div className="yorfy__nft-benefits__content-card">
          <div className="yorfy__nft-benefits__content-card__logo">
            <img src={benefitsCheck} alt="benefits check" />
          </div>
          <div className="yorfy__nft-benefits__content-card__text">
            <h5>Original Design</h5>
            <p className="paragraph-label">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et.
            </p>
          </div>
        </div>
        <div className="yorfy__nft-benefits__content-card">
          <div className="yorfy__nft-benefits__content-card__logo">
            <img src={benefitsCheck} alt="benefits check" />
          </div>
          <div className="yorfy__nft-benefits__content-card__text">
            <h5>Eye Catching</h5>
            <p className="paragraph-label">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et.
            </p>
          </div>
        </div>
        <div className="yorfy__nft-benefits__content-card">
          <div className="yorfy__nft-benefits__content-card__logo">
            <img src={benefitsCheck} alt="benefits check" />
          </div>
          <div className="yorfy__nft-benefits__content-card__text">
            <h5>Up to Date</h5>
            <p className="paragraph-label">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
