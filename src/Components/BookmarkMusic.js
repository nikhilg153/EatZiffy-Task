import React, { useState } from "react";
import "./BookmarkMusic.css";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";

function BookmarkMusic() {
  const [bellClicked, setBellClicked] = useState(false);
  const [bellClicked1, setBellClicked1] = useState(false);
  const [bellClicked2, setBellClicked2] = useState(false);
  const [starClicked, setStarClicked] = useState(false);
  const [starClicked1, setStarClicked1] = useState(false);
  const [starClicked2, setStarClicked2] = useState(false);
  return (
    <div className="section">
      <div className="section__label">
        <p>Labels</p>
        <ul>
          <li className="item1">+</li>
          <li className="item3">All</li>
          <li className="item2">Rock</li>
          <li className="item4">Pop</li>
          <li className="item5">Hip Pop</li>
        </ul>
      </div>
      <div className="section__bookmarks">
        <h1>Bookmarks</h1>
        <BookmarkBorderIcon />
        <p>0</p>
        <div className="arrows">
          <img className="arrowup" src="../icons/arrowup.svg" />
          <img className="arrowdown" src="../icons/arrowdown.svg" />
        </div>
      </div>
    </div>
  );
}

export default BookmarkMusic;
