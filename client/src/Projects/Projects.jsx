import React from 'react';

import CategoryContainer from '../common/CategoryContainer/CategoryContainer';
import NavMenuLink from './../common/NavMenuLink/NavMenuLink';
import ProjectNameDisplay from '../common/ProjectNameDisplay/ProjectNameDisplay';

import simpleDragon from '../assets/ProjectContainer/background/wp3237503-dragon-neon-wallpaper.jpg';
import intermediateDragon from '../assets/ProjectContainer/background/e4379e97-f025-4fee-9572-a743c795575a.jfif';
import purpleDragon from '../assets/ProjectContainer/background/black-dragon-breath-battle-4k-xe-1920x1080.jpg';

import './projects.css';

function Projects(props) {
  return (
    <div id="projects-container">
      <div className="nav-menu-container">
        <NavMenuLink path="/" menuName="HOME" />
        <NavMenuLink path="/" menuName="ABOUT ME" />
        <NavMenuLink path="/projects" menuName="PROJECTS" />
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
      <div className="project-name-display">
        <ProjectNameDisplay />
        <ProjectNameDisplay />
        <ProjectNameDisplay />
      </div>
    </div>
  );
}

export default Projects;
