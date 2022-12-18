import React from 'react';
import './technologies.css';

function Technologies(props) {
  return (
    <div id="technologies-container">
      <img
        src={require('../assets/Technologies/techno-mandala.png')}
        alt=""
        className="techno-outer-circle"
      />
      <div className="techno-inner-circle">
        <img
          src={require('../assets/Technologies/html-css-js-logo.png')}
          alt=""
          className="techno-basics-image"
        />
      </div>
      <img
        src={require('../assets/Technologies/techno-tools-chest.png')}
        alt=""
        className="techno-tools-chest"
      />
    </div>
  );
}

export default Technologies;
