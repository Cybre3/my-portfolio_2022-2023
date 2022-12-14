import React from 'react';
import './HexagonwithOptionalImage.css';

function HexagonwithOptionalImage(props) {
  return (
    <div className="hex">
      <img className="image" src={props.hexImage} alt="hex-layer-pic"></img>
      <div className="part1"></div>
      <div className="part2"></div>
      <div className="part3"></div>
    </div>
  );
}

export default HexagonwithOptionalImage;
