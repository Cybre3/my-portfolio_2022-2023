import React from 'react';
import backgroundImage from '../../../assets/ProjectContainer/background/louise-pilgaard-4muj7Br-O4U-unsplash.jpg';
import './intermediateProjectsImageContainer.css';

function ProjectsImageContainer(props) {
  return (
    <div className="intermediate-projects-image-container">
      <div className="intermediate-image-select">
        <span className="select-space">x</span>SELECT
      </div>
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
        className="intermediate-projects-image"
      >
        <p className='inter-projs-image-title'>PROJECT TITLE</p>
      </div>
    </div>
  );
}

export default ProjectsImageContainer;
