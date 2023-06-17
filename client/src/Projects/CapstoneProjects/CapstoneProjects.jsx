import React from 'react';
import ExitToMenuButton from '../../Technologies/solar_system_2D/ExitToMenuButton';
import CapstoneDisplayContainer from './CapstoneDisplayContainer/CapstoneDisplayContainer';
import CapstoneNavbarContainer from './CapstoneNavbarContainer/CapstoneNavbarContainer';
import './capstoneProjects.css';

function CapstoneProjects(props) {
  return (
    <div className="capstone-container">
      <CapstoneNavbarContainer />
      <CapstoneDisplayContainer />
      <ExitToMenuButton />
    </div>
  );
}

export default CapstoneProjects;
