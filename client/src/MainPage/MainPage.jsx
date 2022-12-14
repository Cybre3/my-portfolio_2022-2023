import React, { Component } from 'react';
import MenuSelectItem from '../common/MenuSelectItem';
import hexImage from '../../src/images/icons/SeekPng.com_storm-png_9639191.png';
import './mainPage.css';
import HexNameBadge from '../common/HexNameBadge';

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
          <MenuSelectItem innerText="About Me" />
          <MenuSelectItem innerText="Projects" />
          <MenuSelectItem innerText="Technologies" />
          <MenuSelectItem innerText="Resume" />
          <MenuSelectItem innerText="Contact Me" />
          <MenuSelectItem innerText="Interests" />
        </div>
      </div>
    );
  }
}

export default MainPage;
