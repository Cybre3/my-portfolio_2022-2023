import React from 'react';
import { NavLink } from 'react-router-dom';

function ProjectsNavbar(props) {
  return (
    <nav className="projects-navbar">
      <NavLink to="/projects/simple-projects">SIMPLE</NavLink>
      <NavLink to="/projects/intermediate-projects">INTERMEDIATE</NavLink>
      <NavLink to="/projects/capstone-projects">CAPSTONE</NavLink>
    </nav>
  );
}

export default ProjectsNavbar;