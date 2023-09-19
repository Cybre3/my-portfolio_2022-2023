import React from 'react';
import $ from 'jquery';

import ProjectsNavbar from './../ProjectsNavbar';
import ProjectsDescription from '../ProjectsDescription';
import ProjectsMainMenuItems from '../ProjectsMainMenuItems/ProjectsMainMenuItems';
import IntermediateProjectsImagesContainer from './IntermediateProjectsImagesContainer/IntermediateProjectsImagesContainer';
import ExitToMenuButton from '../../Technologies/solar_system_2D/ExitToMenuButton';
import ProjectPreview from '../ProjectPreview/ProjectPreview';

import './intermediateProjects.css';

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

    $(window).hover(function () {
      $('video').trigger('play');
    });
  });

  return (
    <div className="intermediate-projects-container">
      <h1 className="intermediate-projects-heading">PROJECTS</h1>
      <ProjectsNavbar />
      <ProjectsDescription styles={'text-black'} />
      <ProjectPreview />
      <IntermediateProjectsImagesContainer />
      <ProjectsMainMenuItems styles={'!flex !flex-col !space-y-4 absolute top-48 left-32'} />
      <ExitToMenuButton />
    </div>
  );
}

export default IntermediateProjects;
