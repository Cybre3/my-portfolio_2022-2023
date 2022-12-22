import React from 'react';
import { NavLink } from 'react-router-dom';

function ExitToMenuButton(props) {
  return (
    <NavLink className="exit-to-menu-button" to="/">
      <img
        className="techno-nav-icon"
        src={require('../assets/Technologies/icons/backtomenu-icon.png')}
        alt=""
      />
      <div className="techno-nav-text">BACK TO MENU</div>
    </NavLink>
  );
}

export default ExitToMenuButton;