import React from 'react';
import $ from 'jquery';

function ToolBox(props) {
  $(document).ready(function () {
    if (props.show === true) {
      $('.techno-chest-video').trigger('play');
    }
  });

  return (
    <div>
      {!props.show ? (
        <img
          src={require('../assets/Technologies/techno-tools-chest.png')}
          alt=""
          className="techno-tools-chest"
          onClick={() => props.setShow(props.show === false ? true : false)}
        />
      ) : (
        <video
          className="techno-chest-video"
          onClick={() => props.setShow(props.show === false ? true : false)}
        >
          <source
            src={require('../assets/Technologies/tools-chest-animation.mp4')}
            type="video/mp4"
          />
        </video>
      )}
    </div>
  );
}

export default ToolBox;
