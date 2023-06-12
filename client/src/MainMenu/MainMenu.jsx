import React from 'react';

/* import hexImage from '../assets/icons/brainIcon.png';
import HexNameBadge from '../common/HexNameBadge/HexNameBadge';
import UnderConstruction from './../UnderConstruction/UnderConstruction';
import MenuItems from './MenuItems'; */
import './mainMenu.css';

const divSelection = [
  { section: 'projects', title: 'projects' },
  { section: 'about me', title: 'about me' },
  { section: 'contact', title: 'contact' },
  { section: 'technologies', title: 'technologies' },
  { section: 'resume', title: 'resume' },
];

function MainMenu() {
  return (
    // <div id="mainPage-container">
    //   <HexNameBadge
    //     className="mainPage-hexBadge"
    //     hexImage={hexImage}
    //     fullName={'STARRIKA MCCLOUD'}
    //     role={'Full Stack Developer'}
    //   />
    //   <div className="gradient-background"></div>
    //   <MenuItems />
    //   {/* <div className="gradient-background2"></div> */}
    //   <UnderConstruction />
    // </div>
    <div className="mainmenu">
      <div className="main-cards grid grid-cols-1 grid-row-2 w-full w-72 gap-8">
        <div id="projects" className="card">
          {' '}
          <h2 className="uppercase font-bold ml-6 mt-4">projects</h2>
        </div>
        <div id="technologies" className="card">
          {' '}
          <h2 className="uppercase font-bold ml-6 mt-4">technologies</h2>
        </div>
      </div>
    </div>
  );
}

export default MainMenu;
