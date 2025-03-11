import React from "react";
import "./collection.css";
import { Heading, Button, NFTCard } from "../index.js";
import { useNavigate } from "react-router-dom";

const Collection = ({ nftCollectionData, heading, button = false }) => {
  const Navigate = useNavigate();

  return (
    <div className="yorfy__collection section__margin">
      <div className="yorfy__collection__heading">
        <Heading
          heading={heading.heading}
          title={heading.title}
          body={heading.body}
        />
      </div>
      <div className="yorfy__collection__content">
        {nftCollectionData &&
          nftCollectionData.map((item, index) => (
            <NFTCard
              key={index}
              imageSource={item.imageSource}
              title={item.title}
              logo={item.logo}
              body={item.body}
            />
          ))}
      </div>
      {button && (
        <Button
          style="secondary"
          size="large"
          text="View on OpenSea"
          disabled={false}
          onClick={() => Navigate("/error")}
        />
      )}
    </div>
  );
};

export default Collection;
