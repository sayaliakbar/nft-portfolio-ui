import React from "react";
import "./newsletter.css";

import { Heading, Button, Input } from "../../../components";

const Newsletter = () => {
  return (
    <div className="yorfy__newsletter section__margin">
      <div className="yorfy__newsletter-heading">
        <Heading
          heading="Newsletter"
          title="You Do Not Want to Miss Out on this!"
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
      </div>
      <form
        className="yorfy__newsletter-input"
        onSubmit={(e) => {
          e.preventDefault();
          console.log("submitted");
        }}
      >
        <Input placeholder="Your Email" size="large" />
        <Button
          text="Submit"
          type="submit"
          style="primary"
          size="large"
          icon={false}
        />
      </form>
    </div>
  );
};

export default Newsletter;
