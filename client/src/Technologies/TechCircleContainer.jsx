import React from 'react';

import PicsOuterCircle from './PicsOuterCircle';
import PicsInnerCircle from './PicsInnerCircle';

function TechCircleContainer(props) {
  return (
    <div className="tech-circle-container">
      <img
        src={require('../assets/Technologies/techno-mandala.png')}
        alt=""
        className="techno-outer-circle-mandala"
      />
      <div className="techno-inner-circle">
        <img
          className="techno-basics-image"
          src={require('../assets/Technologies/html-css-js-logo.png')}
          alt=""
        />
      </div>
      <PicsOuterCircle />
      <PicsInnerCircle />
    </div>
  );
}

export default TechCircleContainer;