import React, { useState } from "react";
import "./BookmarkProgram.css";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";

function BookmarkProgram() {
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
          <li className="item2">Dart</li>
          <li className="item2">Java</li>
          <li className="item5">Python</li>
          <li className="item4">C++</li>
        </ul>
      </div>
      <div className="section__bookmarks">
        <h1>Bookmarks</h1>
        <BookmarkBorderIcon />
        <p>2</p>
        <div className="arrows">
          <img className="arrowup" src="../icons/arrowup.svg" />
          <img className="arrowdown" src="../icons/arrowdown.svg" />
        </div>
      </div>
      <div className="section__menu">
        <div className="section__menucard">
          <img src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1789&q=80" />
          <span>Java Programming</span>
          <div className="icons1">
            <div onClick={() => setBellClicked(!bellClicked)}>
              {bellClicked ? (
                <img src="../icons/bellicon1.svg" />
              ) : (
                <img src="../icons/bellicon.svg" />
              )}
            </div>
            <div onClick={() => setStarClicked(!starClicked)}>
              {starClicked ? (
                <img src="../icons/staricon1.svg" />
              ) : (
                <img src="../icons/staricon.svg" />
              )}
            </div>
          </div>
          <div className="icons2">
            <img className="bookmarkicon" src="../icons/bookmarkicon.svg" />
            <img className="deleteicon" src="../icons/deleteicon.svg" />
          </div>
        </div>
        <div className="section__menucard">
          <img src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1789&q=80" />
          <span>C# Dot Net</span>
          <div className="icons1">
            <div onClick={() => setBellClicked1(!bellClicked1)}>
              {bellClicked1 ? (
                <img src="../icons/bellicon.svg" />
              ) : (
                <img src="../icons/bellicon1.svg" />
              )}
            </div>
            <div onClick={() => setStarClicked1(!starClicked1)}>
              {starClicked1 ? (
                <img src="../icons/staricon1.svg" />
              ) : (
                <img src="../icons/staricon.svg" />
              )}
            </div>
          </div>
          <div className="icons2">
            <img className="bookmarkicon" src="../icons/bookmarkicon.svg" />
            <img className="deleteicon" src="../icons/deleteicon.svg" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookmarkProgram;
