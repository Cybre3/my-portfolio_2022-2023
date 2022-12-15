import React, { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import useSound from 'use-sound';

function MenuSelectItem(props) {
  const audio = require('../assets/Mainpage/audio/mixkit-typewriter-soft-click-1125.wav');
  let [play] = useSound(audio);

  return (
    <NavLink to={props.path} className="menuSelect-item-container" onMouseEnter={() => play()}>
      <div className="menuSelect-innerText">
        {props.innerText}
        <audio>
          <source src={audio} type="audio/wav" />
        </audio>
      </div>
    </NavLink>
  );
}

export default MenuSelectItem;
