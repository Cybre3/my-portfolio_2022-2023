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
    <div id="projects-container" className='fade-in'>
      <div className="nav-menu-container">
        <NavMenuLink path="/main-menu" menuName="HOME" />
        <NavMenuLink path="/about-me" menuName="ABOUT ME" />
        <NavMenuLink path="/projects" menuName="PROJECTS" />
        <NavMenuLink path="/technologies" menuName="TECHNOLOGIES" />
        <NavMenuLink path="/resume" menuName="RESUME" />
        <NavMenuLink path="/contact-me" menuName="CONTACT ME" />
        <NavMenuLink path="/interests" menuName="INTERESTS" />
      </div>
      <div className="project-category-container">
        <CategoryContainer
          categoryPic={simpleDragon}
          title="SIMPLE"
          linkTo="/projects/simple-projects"
        />
        <CategoryContainer
          categoryPic={intermediateDragon}
          title="INTERMEDIATE"
          linkTo="/projects/intermediate-projects"
        />
        <CategoryContainer
          categoryPic={purpleDragon}
          title="CAPSTONE"
          linkTo="/projects/capstone-projects"
        />
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
