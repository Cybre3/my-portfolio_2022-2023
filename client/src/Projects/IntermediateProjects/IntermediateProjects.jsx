import React from 'react';
import $ from 'jquery';

import ProjectsNavbar from './../ProjectsNavbar';
import ProjectsDescription from '../ProjectsDescription';
import ProjectsImageContainer from '../ProjectsImageContainer';
import ExitToMenuButton from './../../Technologies/ExitToMenuButton';
import video from '../../assets/video/whiteTv-video.mp4';

import './intermediateProjects.css';
import ProjectsMainMenuItems from '../ProjectsMainMenuItems';

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
      <ProjectsDescription />
      <div className="project-preview">
        <video className="static-video" width="100%" height="100%" src={video} loop/>
      </div>
      <div className="intermediate-projects-images-container">
        <ProjectsImageContainer />
        <ProjectsImageContainer />
        <ProjectsImageContainer />
        <ProjectsImageContainer />
        <ProjectsImageContainer />
        <ProjectsImageContainer />
        <ProjectsImageContainer />
      </div>
      <ProjectsMainMenuItems />
      <ExitToMenuButton />
    </div>
  );
}

export default IntermediateProjects;
