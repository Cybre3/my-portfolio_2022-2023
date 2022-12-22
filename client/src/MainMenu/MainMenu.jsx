import React from 'react';

import hexImage from '../assets/icons/brainIcon.png';
import './mainMenu.css';
import HexNameBadge from '../common/HexNameBadge/HexNameBadge';
import UnderConstruction from './../UnderConstruction/UnderConstruction';
import MenuItems from './MenuItems';

function MainMenu() {
    return (
      <div id="mainPage-container">
        <HexNameBadge
          className="mainPage-hexBadge"
          hexImage={hexImage}
          fullName={'STARRIKA MCCLOUD'}
          role={'Full Stack Developer'}
        />
        <div className="gradient-background"></div>
        <MenuItems />
        {/* <div className="gradient-background2"></div> */}
        <UnderConstruction />
      </div>
    );
}

export default MainMenu;
