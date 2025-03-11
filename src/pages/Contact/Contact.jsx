import React from "react";

import "./contact.css";
import { Header, Community } from "../../components/index.js";

import { SocialMedia, ContactForm } from "../../containers/Contact/index.js";

const Contact = () => {
  return (
    <div className="yorfy__contactUs">
      <Header
        heading="Contact Us"
        title="Wan’t To Collaborate with Yorfy? Don’t be Shy to Talk"
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <SocialMedia />
      <ContactForm />
      <Community />
    </div>
  );
};

export default Contact;
