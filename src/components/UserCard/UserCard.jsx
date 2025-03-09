import React from "react";
import "./usercard.css";
import userMenu from "../../assets/icons/user_menu.svg";

const UserCard = () => {
  return (
    <div className="yorfy__userCard">
      <div className="yorfy__userCard-user">
        <img src="" alt="user" />
        <div>
          <h6>ShooPharDhie</h6>
          <p className=" paragraph-label">Last Online 2 Hour Ago</p>
        </div>
      </div>
      <img src={userMenu} alt="User Menu" />
    </div>
  );
};

export default UserCard;
