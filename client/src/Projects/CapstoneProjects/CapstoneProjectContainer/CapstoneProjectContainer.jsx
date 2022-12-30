import React from 'react';
import './capstoneProjectContainer.css';

function CapstoneProjectContainer(props) {
  return (
    <div className="capstone-project-container">

      <div className={`capstone-project-info ${props.containerSide}`}>
        <h2 className="capstone-project-title">Title</h2>
        <p className="capstone-project-description">Some mumbo jumbo about capstone project</p>
      </div>

      <div className="capstone-project-image-container">
        <div className="capstone-proj-image"></div>
      </div>

    </div>
  );
}

export default CapstoneProjectContainer;