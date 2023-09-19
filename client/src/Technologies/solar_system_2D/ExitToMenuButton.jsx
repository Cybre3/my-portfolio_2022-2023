import React from 'react';
import { NavLink } from 'react-router-dom';

function ExitToMenuButton(props) {
  return (
    <NavLink className={`absolute w-fit bottom-6 right-4 flex flex-col items-center ${props.styles}`} to="/main-menu">
      <img
        className="w-10"
        src={require('../../assets/Technologies/icons/backtomenu-icon.png')}
        alt=""
      />
      <div className="text-sm">BACK TO MENU</div>
    </NavLink>
  );
}

export default ExitToMenuButton;