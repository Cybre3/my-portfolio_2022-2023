import React from 'react';
import $ from 'jquery';

import ProjectsNavbar from '../ProjectsNavbar';
import ProjectsDescription from '../ProjectsDescription';
import SimpleProjectsCarousel from './SimpleProjectsCarousel/SimpleProjectsCarousel';
import ProjectsMainMenuItems from './../ProjectsMainMenuItems/ProjectsMainMenuItems';
import ExitToMenuButton from '../../Technologies/solar_system_2D/ExitToMenuButton';

import './simpleProjects.css';

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
      <h1 className="simple-projects-heading">PROJECTS</h1>
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
