import React from 'react';
import video from '../../assets/video/whiteTv-video.mp4';
import './projectPreview.css';

function ProjectPreview(props) {
  return (
    <div className="project-preview">
      <video className="static-video" width="100%" height="100%" src={video} loop />
    </div>
  );
}

export default ProjectPreview;