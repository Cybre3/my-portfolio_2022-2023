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
      <ProjectsDescription styles={'!text-black'} styleDescription={'!border-black'} />
      <div className="project-preview"></div>
      <SimpleProjectsCarousel />
      <ProjectsMainMenuItems styles={'!flex !flex-col !space-y-4 absolute top-48 left-32'} />
      <ExitToMenuButton styles={'text-black'} />
    </div>
  );
}

export default SimpleProjects;
