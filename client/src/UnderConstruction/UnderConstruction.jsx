import React from 'react';
import TypeAnimationUnderConstruction from '../utilities/Typical_under-construction';

import './underConstruction.css';

function UnderConstruction(props) {
  return (
    <div className="under-construct-container">
      <p className="construct-text">
        <TypeAnimationUnderConstruction />
      </p>
    </div>
  );
}

export default UnderConstruction;
