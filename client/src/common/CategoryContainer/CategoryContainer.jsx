import React from 'react';
import {NavLink} from 'react-router-dom';
import './categoryContainer.css';

function CategoryContainer(props) {
  return (
    <NavLink id="category-container">
      <h1 className="category-title">{props.title}</h1>
      <div className="category-description-container">
        <p className="category-description-text">
          some type of description down below to add about projects.
        </p>
      </div>
      <img className="category-background" src={props.categoryPic} alt="" />
    </NavLink>
  );
}

export default CategoryContainer;
