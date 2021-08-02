import React, { useState } from "react";
import "./Bookmark.css";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import { Link } from "react-router-dom";

function Bookmark() {
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
          <Link className="link" to="/cooking/all">
            <li className="item2">All</li>
          </Link>
          <li className="item3">Burger</li>
          <li className="item4">Pizza</li>
          <li className="item5">Nanza</li>
          <li className="item5">Momo</li>
          <li className="item5">Chinese</li>
        </ul>
      </div>
      <div className="section__bookmarks">
        <h1>Bookmarks</h1>
        <BookmarkBorderIcon />
        <p>143</p>
        <div className="arrows">
          <img className="arrowup" src="../icons/arrowup.svg" />
          <img className="arrowdown" src="../icons/arrowdown.svg" />
        </div>
      </div>
      <div className="section__menu">
        <div className="section__menucard">
          <img src="../icons/BurgerImage.svg" />
          <span>Chicken Burger</span>
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
          <img src="../icons/BurgerImage.svg" />
          <span>Ham Burger</span>
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
                <img src="../icons/staricon.svg" />
              ) : (
                <img src="../icons/staricon1.svg" />
              )}
            </div>
          </div>
          <div className="icons2">
            <img className="bookmarkicon" src="../icons/bookmarkicon.svg" />
            <img className="deleteicon" src="../icons/deleteicon.svg" />
          </div>
        </div>
        <div className="section__menucard">
          <img src="../icons/BurgerImage.svg" />
          <span>Veg Burger</span>
          <div className="icons1">
            <div onClick={() => setBellClicked2(!bellClicked2)}>
              {bellClicked2 ? (
                <img src="../icons/bellicon1.svg" />
              ) : (
                <img src="../icons/bellicon.svg" />
              )}
            </div>
            <div onClick={() => setStarClicked2(!starClicked2)}>
              {starClicked2 ? (
                <img src="../icons/staricon.svg" />
              ) : (
                <img src="../icons/staricon1.svg" />
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

export default Bookmark;
