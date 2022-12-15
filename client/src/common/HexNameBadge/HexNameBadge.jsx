import React from 'react';
import Hexagon from '../HexagonwithOptionalImage/HexagonwithOptionalImage';
import NameBadge from '../NameBadge_skewed/NameBadge_skewed';
import './hexNameBadge.css';

function HexNameBadge(props) {
  return (
    <div className="hex-nameBadge">
      <Hexagon hexImage={props.hexImage} />
      <NameBadge fullName={props.fullName} role={props.role} />
    </div>
  );
}

export default HexNameBadge;
