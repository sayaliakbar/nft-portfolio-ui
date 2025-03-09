import React from "react";

import "./community.css";
import { Heading, Button, UserCard } from "../../../components/index.js";
const Community = () => {
  return (
    <div className="yorfy__community section__padding">
      <div className="yorfy__community-heading">
        <Heading
          heading="Community"
          title="Join Our Community and Get Many Benefits"
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <Button
          text="Join Our Discord"
          type="primary"
          size="large"
          onClick={() => {
            console.log("clicked");
          }}
          disabled={false}
        />
      </div>
      <div className="yorfy__community-userCards">
        <UserCard />
        <UserCard />
        <UserCard />
      </div>
    </div>
  );
};

export default Community;
