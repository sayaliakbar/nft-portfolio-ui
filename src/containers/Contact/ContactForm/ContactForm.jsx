import React from "react";

import "./contactform.css";
import { Input, Button } from "../../../components/index.js";
import { useNavigate } from "react-router-dom";

const ContactForm = () => {
  const Navigate = useNavigate();
  return (
    <form className="yorfy__contact-contactForm">
      <div className="yorfy__contact-contactForm__name">
        <Input placeholder="Type Here" label="First Name" size="large" />
        <Input placeholder="Type Here" label="Last Name" size="large" />
      </div>
      <div className="yorfy__contact-contactForm__email">
        <Input placeholder="Type Here" label="Email" size="large" />
        <Input placeholder="Type Here" label="Phone Number" size="large" />
      </div>
      <Input placeholder="Type Here" label="Subject" size="large" />
      <Input placeholder="Type Here" label="Message" size="large" />
      <Button
        text="Submit"
        type="submit"
        size="large"
        onClick={(e) => {
          e.preventDefault();
          Navigate("/error");
        }}
      />
    </form>
  );
};

export default ContactForm;
