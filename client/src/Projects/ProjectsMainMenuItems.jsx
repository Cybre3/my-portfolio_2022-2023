import React from 'react';
import { NavLink } from 'react-router-dom';

function ProjectsMainMenuItems(props) {
  return (
    <div className="projects-main-menu-items">
      <NavLink to="/about-me">ABOUT ME</NavLink>
      <NavLink to="/projects">PROJECTS</NavLink>
      <NavLink to="/technologies">TECHNOLOGIES</NavLink>
      <NavLink to="/resume">RESUME</NavLink>
      <NavLink to="/contact-me">CONTACT ME</NavLink>
    </div>
  );
}

export default ProjectsMainMenuItems;