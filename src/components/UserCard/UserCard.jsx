import React from "react";
import "./usercard.css";
import userMenu from "../../assets/icons/user_menu.svg";

const UserCard = ({ imageSource, title, body }) => {
  return (
    <div className="yorfy__userCard">
      <div className="yorfy__userCard-user">
        <img src={imageSource} alt="user" />
        <div>
          <h6>{title}</h6>
          <p className=" paragraph-label">{body}</p>
        </div>
      </div>
      <img src={userMenu} alt="User Menu" />
    </div>
  );
};

export default UserCard;
