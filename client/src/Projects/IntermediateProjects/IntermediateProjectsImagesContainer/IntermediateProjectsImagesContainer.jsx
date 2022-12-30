import React from 'react';
import ProjectsImageContainer from '../IntermediateProjectsImageContainer/IntermediateProjectsImageContainer';
import './intermediateProjectsImagesContainer.css';

function IntermediateProjectsImagesContainer(props) {
  return (
    <div className="intermediate-projects-images-container">
      <ProjectsImageContainer />
      <ProjectsImageContainer />
      <ProjectsImageContainer />
      <ProjectsImageContainer />
      <ProjectsImageContainer />
      <ProjectsImageContainer />
      <ProjectsImageContainer />
    </div>
  );
}

export default IntermediateProjectsImagesContainer;
