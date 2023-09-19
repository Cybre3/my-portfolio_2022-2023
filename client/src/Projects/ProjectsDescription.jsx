import React from 'react';

function ProjectsDescription(props) {
  return (
    <div className={`simple-projects-title-description ${props.styles}`}>
      <h2 className="simple-projects-title">TITLE OF PROJECT</h2>
      <p className={`simple-projects-desciption ${props.styleDescription} `}>
        Some mumbo jumbo about projects in view
      </p>
    </div>
  );
}

export default ProjectsDescription;
