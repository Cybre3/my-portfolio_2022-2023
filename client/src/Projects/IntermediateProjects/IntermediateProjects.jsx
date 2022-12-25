import React from 'react';
import { NavLink } from 'react-router-dom';
import $ from 'jquery';

import ProjectsNavbar from './../ProjectsNavbar';
import ProjectsDescription from '../ProjectsDescription';
import './intermediateProjects.css';
import ProjectsImageContainer from '../ProjectsImageContainer';
import ExitToMenuButton from './../../Technologies/ExitToMenuButton';

function IntermediateProjects(props) {
  $(document).ready(function () {
    $('.intermediate-projects-image').hover(
      function () {
        $('.intermediate-image-select').show();
      },
      function () {
        $('.intermediate-image-select').hide();
      }
    );
  });

  return (
    <div className="intermediate-projects-container">
      <h1 className="intermediate-projects-heading">PROJECTS</h1>
      <ProjectsNavbar />
      <ProjectsDescription />
      <div className="project-preview"></div>
      <div className="intermediate-projects-images-container">
        <ProjectsImageContainer />
        <ProjectsImageContainer />
        <ProjectsImageContainer />
        <ProjectsImageContainer />
        <ProjectsImageContainer />
        <ProjectsImageContainer />
        <ProjectsImageContainer />
      </div>
      <div className="projects-main-menu-items">
        <NavLink to="/about-me">ABOUT ME</NavLink>
        <NavLink to="/projects">PROJECTS</NavLink>
        <NavLink to="/technologies">TECHNOLOGIES</NavLink>
        <NavLink to="/resume">RESUME</NavLink>
        <NavLink to="/contact-me">CONTACT ME</NavLink>
      </div>
      <ExitToMenuButton />
    </div>
  );
}

export default IntermediateProjects;
