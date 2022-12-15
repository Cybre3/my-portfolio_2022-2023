import React from 'react';
import './nameBadge_skewed.css';

function NameBadge(props) {
  return (
    <div className="name-badge">
      <div className="name">{props.fullName}</div>
      <div className="sub-title">- {props.role} -</div>
    </div>
  );
}

export default NameBadge;
