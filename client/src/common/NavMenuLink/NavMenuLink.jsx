import React from 'react';
import { NavLink } from 'react-router-dom';
import './navMenuLink.css';

function NavMenuLink(props) {
  return (
    <NavLink id="nav-menu-link" to={props.path}>
      <div className="nav-link-text">{props.menuName}</div>
    </NavLink>
  );
}

export default NavMenuLink;
