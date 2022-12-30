import React from 'react';
import CapstoneProjectContainer from '../CapstoneProjectContainer/CapstoneProjectContainer';

import './capstoneDisplayContainer.css';

function CapstoneDisplayContainer(props) {
  return (
    <div className="capstone-display-container">
      <CapstoneProjectContainer containerSide={'cap-left'} />
      <CapstoneProjectContainer containerSide={'cap-right'} />

      <div className="selected-project">
        <span>Selected Project:</span>
      </div>

      <div className="ready-button">
        <span>Ready</span>
      </div>
    </div>
  );
}

export default CapstoneDisplayContainer;