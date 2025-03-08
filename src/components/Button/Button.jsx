import React from "react";

import "./button.css";

const Button = ({ text, type, size, onClick, disabled }) => {
  return (
    <button
      className={`yorfy__btn yorfy__btn-${type} yorfy__btn-${size}`}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
