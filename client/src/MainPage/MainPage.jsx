import React, { Component } from 'react';
import MenuSelectItem from '../common/MenuSelectItem';
import hexImage from '../assets/icons/brainIcon.png';
import './mainPage.css';
import HexNameBadge from '../common/HexNameBadge/HexNameBadge';

class MainPage extends Component {
  render() {
    return (
      <div id="mainPage-container">
        <HexNameBadge
          className="mainPage-hexBadge"
          hexImage={hexImage}
          fullName={'STARRIKA MCCLOUD'}
          role={'Full Stack Developer'}
        />
        <div className="gradient-background"></div>
        <div className="gradient-background2"></div>
        <div className="mainPage-menuItems">
          <MenuSelectItem innerText="About Me" path='/about-me' />
          <MenuSelectItem innerText="Projects" path='/projects' />
          <MenuSelectItem innerText="Technologies" path='/technologies' />
          <MenuSelectItem innerText="Resume" path='/resume' />
          <MenuSelectItem innerText="Contact Me" path='/contact-me' />
          <MenuSelectItem innerText="Interests" path='/interests' />
        </div>
      </div>
    );
  }
}

export default MainPage;
