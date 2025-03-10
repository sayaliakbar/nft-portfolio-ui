import React from "react";
import "./collection.css";
import { Heading, Button, NFTCard } from "../index.js";

const Collection = ({ nftCollectionData }) => {
  return (
    <div className="yorfy__collection section__margin">
      <div className="yorfy__collection__heading">
        <Heading
          heading="Collections"
          title="Yorfy NFT Collections"
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
      </div>
      <div className="yorfy__collection__content">
        {nftCollectionData &&
          nftCollectionData.map((item, index) => (
            <NFTCard
              key={index}
              imageSource={item.imageSource}
              title={item.title}
            />
          ))}
      </div>
      <Button
        style="secondary"
        size="large"
        text="View on OpenSea"
        disabled={false}
        onClick={() => console.log("clicked")}
      />
    </div>
  );
};

export default Collection;
