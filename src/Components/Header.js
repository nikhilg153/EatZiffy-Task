import React from "react";
import "./Header.css";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import SearchIcon from "@material-ui/icons/Search";

function Header({ name, greeting }) {
  return (
    <div className="header">
      <div className="header__icons">
        <NotificationsIcon />
        <AccountCircleIcon />
        <p>John</p>
        <KeyboardArrowDownIcon />
      </div>
      <p className="header__text">{name}</p>
      <h1>{greeting}</h1>
      <div className="header__searchbox">
        <SearchIcon />
        <input
          type="text"
          placeholder="What bookmarks are you searching for ?"
        />
      </div>
    </div>
  );
}

export default Header;
