import React from 'react';
import MenuSelectItem from '../common/MenuSelectItem';

function MenuItems(props) {
  return (
    <div className="mainPage-menuItems">
      <MenuSelectItem innerText="About Me" path="/about-me" />
      <MenuSelectItem innerText="Projects" path="/projects" />
      <MenuSelectItem innerText="Technologies" path="/technologies" />
      <MenuSelectItem innerText="Resume" path="/resume" />
      <MenuSelectItem innerText="Contact Me" path="/contact-me" />
    </div>
  );
}

export default MenuItems;