import { NavLink } from 'react-router-dom';
import useSound from 'use-sound';

function MenuSelectItem(props) {
  const audio = require('../assets/Mainpage/audio/mixkit-typewriter-soft-click-1125.wav');
  let [play] = useSound(audio);

  return (
    <NavLink
      to={props.path}
      className="w-full py-2 hover:bg-red-800 border-y-2 border-transparent hover:border-orange-200 hover:text-orange-200"
      onMouseEnter={() => play()}
    >
      <div className="">
        {props.title}
        {/* 
        <audio>
          <source src={audio} type="audio/wav" />
        </audio> 
        */}
      </div>
    </NavLink>
  );
}

export default MenuSelectItem;
