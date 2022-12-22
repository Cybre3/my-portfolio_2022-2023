import React from 'react';
import { NavLink } from 'react-router-dom';

function TechnoNav(props) {
  return (
    <div className="techno-nav-icons">
      <NavLink to="/about-me">
        <img
          className="techno-nav-icon"
          src={require('../assets/Technologies/icons/aboutme-icon.png')}
          alt=""
        />
      </NavLink>
      <NavLink to="/projects">
        <img
          className="techno-nav-icon"
          src={require('../assets/Technologies/icons/projects-icon.png')}
          alt=""
        />
      </NavLink>
      <NavLink to="/resume">
        <img
          className="techno-nav-icon"
          src={require('../assets/Technologies/icons/resume-icon.png')}
          alt=""
        />
      </NavLink>
      <NavLink to="/interests">
        <img
          className="techno-nav-icon"
          src={require('../assets/Technologies/icons/interests-icon.png')}
          alt=""
        />
      </NavLink>
      <NavLink to="/contact-me">
        <img
          className="techno-nav-icon"
          src={require('../assets/Technologies/icons/contact-icon.png')}
          alt=""
        />
      </NavLink>
    </div>
  );
}

export default TechnoNav;
