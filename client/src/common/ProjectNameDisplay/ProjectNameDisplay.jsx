import React from 'react';
import './projectNameDisplay.css';

function ProjectNameDisplay(props) {
  return (
    <div className="projectName-display-container">
      <div className="projectName-display-text">TITLE OF PROJECT</div>
      <img
        src={require('../../assets/ProjectContainer/3DFMB.png')}
        alt="project-display-pic"
        className="projectName-display-image"
      />
    </div>
  );
}

export default ProjectNameDisplay;
