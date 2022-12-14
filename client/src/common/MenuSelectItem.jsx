import React, { useRef } from 'react';
import useSound from 'use-sound';

function MenuSelectItem(props) {
  const audio = require('../MainPage/mixkit-typewriter-soft-click-1125.wav');
  let [play, { stop }] = useSound(audio);

  return (
    <div
      className="menuSelect-item-container"
      onMouseEnter={() => play()}
    >
      <div className="menuSelect-innerText">
        {props.innerText}
        <audio>
          <source src={audio} type="audio/wav" />
        </audio>
      </div>
    </div>
  );
}

export default MenuSelectItem;
