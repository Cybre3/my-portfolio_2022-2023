import React from 'react';
import $ from 'jquery';

import ProjectsNavbar from '../ProjectsNavbar';
import ProjectsDescription from '../ProjectsDescription';
import SimpleProjectsCarousel from '../SimpleProjectsCarousel';

import './simpleProjects.css';
import ProjectsMainMenuItems from '../ProjectsMainMenuItems';
import ExitToMenuButton from './../../Technologies/ExitToMenuButton';

function SimpleProjects(props) {
  $(document).ready(function () {
    $('.carousel__face').hover(
      function () {
        $('.simple-projects-background > .simple-projects-title-description').show();
      },
      function () {
        $('.simple-projects-background > .simple-projects-title-description').hide();
      }
    );
  });

  return (
    <div className="simple-projects-background">
      <h1 className="projects-heading">PROJECTS</h1>
      <ProjectsNavbar />
      <ProjectsDescription />
      <div className="project-preview"></div>
      <SimpleProjectsCarousel />
      <ProjectsMainMenuItems />
      <ExitToMenuButton />
    </div>
  );
}

export default SimpleProjects;
