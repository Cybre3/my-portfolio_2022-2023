import React from 'react';
import Hexagon from '../common/HexagonwithOptionalImage';
import NameBadge from '../common/NameBadge_skewed';
import './HexNameBadge.css';

function HexNameBadge(props) {
  return (
    <div className="hex-nameBadge">
      <Hexagon hexImage={props.hexImage} />
      <NameBadge fullName={props.fullName} role={props.role} />
    </div>
  );
}

export default HexNameBadge;
