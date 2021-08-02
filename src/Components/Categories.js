import React from "react";
import "./Categories.css";
import { Link } from "react-router-dom";

function Categories() {
  return (
    <div className="categories">
      <p>Categories</p>
      <div className="categories__options">
        <Link to="/Ideas">
          <div className="categories__option1">
            <img className="ellipse" src="../icons/Ellipse 3.svg" />
            <img className="vector" src="../icons/Vector.svg" />
            <img className="text" src="../icons/Ideas.svg" />
          </div>
        </Link>
        <Link to="/Programming">
          <div className="categories__option2">
            <img className="ellipse" src="../icons/Ellipse 3.svg" />
            <img className="vector" src="../icons/Vector1.svg" />
            <img className="text1" src="../icons/Promgramming.svg" />
          </div>
        </Link>
        <Link to="/Music">
          <div className="categories__option3">
            <img className="ellipse" src="../icons/Ellipse 3.svg" />
            <img className="vector" src="../icons/Vector2.svg" />
            <img className="text" src="../icons/Music.svg" />
          </div>
        </Link>
        <Link to="/cooking">
          <div className="categories__option4">
            <img className="ellipse" src="../icons/Ellipse 3.svg" />
            <img className="vector" src="../icons/Vector3.svg" />
            <img className="text2" src="../icons/Cooking.svg" />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Categories;
