import React from "react";
import { useNavigate } from "react-router-dom";

import "./error.css";

import { Button, Header } from "../../components/index.js";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="yorfy__errorPage ">
      <Header
        heading="404"
        title="Sorry, The page you are looking for could not be found"
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <Button
        text="Back to Homepage"
        size="large"
        onClick={() => navigate("/")}
      />
    </div>
  );
};

export default ErrorPage;
