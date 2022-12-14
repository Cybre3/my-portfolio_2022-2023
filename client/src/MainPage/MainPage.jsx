import React, { Component } from 'react';
import MenuSelectItem from '../common/MenuSelectItem';
import './mainPage.css';

class MainPage extends Component {
  render() {
    return (
      <div id="mainPage-container">
        <div className="hex-nameBadge">
          <div className="hex">
            <div className="image"></div>
            <div className="part1"></div>
            <div className="part2"></div>
            <div className="part3"></div>
          </div>
          <div className="name-badge">
            <div className="name">STARRIKA MCCLOUD</div>
            <div className="sub-title">- Full Stack Developer -</div>
          </div>
        </div>
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
