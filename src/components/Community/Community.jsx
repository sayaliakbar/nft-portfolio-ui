import React from "react";

import "./community.css";
import { Heading, Button, UserCard } from "../index.js";
import { useNavigate } from "react-router-dom";

import logo from "../../assets/logo.svg";

const Community = () => {
  const Navigate = useNavigate();

  const userData = [
    {
      imageSource: logo,
      title: "ShooPharDhie",
      body: "Last Online 2 Hour Ago",
    },
    {
      imageSource: logo,
      title: "ShooPharDhie",
      body: "Last Online 2 Hour Ago",
    },
    {
      imageSource: logo,
      title: "ShooPharDhie",
      body: "Last Online 2 Hour Ago",
    },
  ];

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
        {userData &&
          userData.map((item, index) => (
            <UserCard
              key={index}
              imageSource={item.imageSource}
              title={item.title}
              body={item.body}
            />
          ))}
      </div>
    </div>
  );
};

export default Community;
