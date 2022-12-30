import React from 'react';
import ProjectsNavbar from '../../ProjectsNavbar';
import ProjectsMainMenuItems from './../../ProjectsMainMenuItems/ProjectsMainMenuItems';


import './capstoneNavbarContainer.css';

function CapstoneNavbarContainer(props) {
  return (
    <div className="capstone-navbar-container">
      <img
        src={require('../../../assets/Technologies/icons/projects-icon.png')}
        alt=""
        className="capstone-navbar-icon"
      />
      <ProjectsNavbar />
      <ProjectsMainMenuItems />
    </div>
  );
}

export default CapstoneNavbarContainer;