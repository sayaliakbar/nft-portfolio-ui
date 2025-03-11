import React from "react";

import "./community.css";
import { Heading, Button, UserCard } from "../index.js";
import { Navigate, useNavigate } from "react-router-dom";

const Community = () => {
  const Navigate = useNavigate();

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
          style="primary"
          size="large"
          onClick={() => Navigate("/error")}
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
