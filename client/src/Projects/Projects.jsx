import React from 'react';
import CategoryContainer from '../common/CategoryContainer/CategoryContainer';
import NavMenuLink from './../common/NavMenuLink/NavMenuLink';

import simpleDragon from '../assets/ProjectContainer/background/peakpx (6).jpg';
import intermediateDragon from '../assets/ProjectContainer/background/dragon-hd-wallpaper-image-002.jpg';
import purpleDragon from '../assets/ProjectContainer/background/black-dragon-breath-battle-4k-xe-1920x1080.jpg';
import './projects.css';

function Projects(props) {
  return (
    <div id="projects-container">
      <div className="nav-menu-container">
        <NavMenuLink path="/" menuName="HOME" />
        <NavMenuLink path="/" menuName="ABOUT ME" />
        <NavMenuLink path="/" menuName="PROJECTS" />
        <NavMenuLink path="/" menuName="TECHNOLOGIES" />
        <NavMenuLink path="/" menuName="RESUME" />
        <NavMenuLink path="/" menuName="CONTACT ME" />
        <NavMenuLink path="/" menuName="INTERESTS" />
      </div>
      <div className="project-category-container">
        <CategoryContainer categoryPic={simpleDragon} title="SIMPLE" />
        <CategoryContainer categoryPic={intermediateDragon} title="INTERMEDIATE" />
        <CategoryContainer categoryPic={purpleDragon} title="CAPSTONE" />
      </div>
    </div>
  );
}

export default Projects;
