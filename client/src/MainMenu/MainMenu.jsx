import React from 'react';

import MenuSelectItem from './../common/MenuSelectItem';

import './mainMenu.css';

const menuItems = [
  { path: '/projects', title: 'Projects' },
  { path: '/technologies', title: 'Technologies' },
  { path: '/about-me', title: 'About me' },
  { path: '/resume', title: 'Resume' },
  { path: '/contact', title: 'Contact' },
];

function MainMenu() {
  return (
    <div
      id="mainPage-container"
      className="fade-in h-screen w-screen bg-test bg-cover bg-center bg-no-repeat font-almendra-sc text-white"
    >
      <div className="ml-48 flex h-full w-60 flex-col items-center bg-black text-red-500">
        <h1 className="mt-20 mb-24 flex flex-col items-center text-3xl font-bold">
          <span>Starrika</span> <span>McCloud</span>{' '}
          <span className="whitespace-pre-wrap text-lg">Full  Stack  Developer</span>
        </h1>
        <div className="flex h-full w-full flex-col text-center  text-lg">
          {menuItems.map((item) => (
            <MenuSelectItem title={item.title} path={item.path} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MainMenu;
