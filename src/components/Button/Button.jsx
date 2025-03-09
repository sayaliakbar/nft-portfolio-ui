import React from "react";

import "./button.css";
import done from "../../assets/icons/done.svg";

const Button = ({
  text,
  style,
  size,
  onClick,
  disabled = false,
  icon = false,
}) => {
  return (
    <button
      className={`yorfy__btn yorfy__btn-${style} yorfy__btn-${size}`}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
      {icon && <img src={done} alt="done" />}
    </button>
  );
};

export default Button;
