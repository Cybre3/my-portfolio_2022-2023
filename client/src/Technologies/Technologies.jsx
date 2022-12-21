import React, { useState, useRef } from 'react';
import $ from 'jquery';
import './technologies.css';
import PicsOuterCircle from './PicsOuterCircle';
import PicsInnerCircle from './PicsInnerCircle';

function Technologies(props) {
  const [show, setShow] = useState(false);
  const vid = useRef(null);

  $(document).ready(function () {
    $('.techno-tools-chest').on('click', () => {
      $('.techno-chest-video').trigger('play');
    });
  });

  return (
    <div id="technologies-container">
      <div className="tech-circle-container">
        {/* <img
          src={require('../assets/Technologies/techno-mandala.png')}
          alt=""
          className="techno-outer-circle-mandala"
        /> */}
        <div className="techno-inner-circle">
          <img
            className="techno-basics-image"
            src={require('../assets/Technologies/html-css-js-logo.png')}
            alt=""
          />
        </div>
        <PicsOuterCircle />
        <PicsInnerCircle />
      </div>
      <div className="techno-info-box right">
        <h2>Technology Icon Title</h2>
        <p>Some Mumbo jumbo about technology icon</p>
      </div>
      <div className="techno-info-box left">
        <h2>Technology Icon Title</h2>
        <p>Some Mumbo jumbo about technology icon</p>
      </div>
      <div className="tool-box" style={{ display: show ? 'flex' : 'none' }}>
        <img
          className="tool-box-logo"
          src={require('../assets/Technologies/logos/mongodb-logo.png')}
          alt=""
        />
        <img
          className="tool-box-logo"
          src={require('../assets/Technologies/logos/mongodb-logo.png')}
          alt=""
        />
        <img
          className="tool-box-logo"
          src={require('../assets/Technologies/logos/mongodb-logo.png')}
          alt=""
        />
        <img
          className="tool-box-logo"
          src={require('../assets/Technologies/logos/mongodb-logo.png')}
          alt=""
        />
        <img
          className="tool-box-logo"
          src={require('../assets/Technologies/logos/mongodb-logo.png')}
          alt=""
        />
        <img
          className="tool-box-logo"
          src={require('../assets/Technologies/logos/mongodb-logo.png')}
          alt=""
        />
        <img
          className="tool-box-logo"
          src={require('../assets/Technologies/logos/mongodb-logo.png')}
          alt=""
        />
        <img
          className="tool-box-logo"
          src={require('../assets/Technologies/logos/mongodb-logo.png')}
          alt=""
        />
        <img
          className="tool-box-logo"
          src={require('../assets/Technologies/logos/mongodb-logo.png')}
          alt=""
        />
        <img
          className="tool-box-logo"
          src={require('../assets/Technologies/logos/mongodb-logo.png')}
          alt=""
        />
      </div>
      <img
        src={require('../assets/Technologies/techno-tools-chest.png')}
        alt=""
        className="techno-tools-chest"
        onClick={() => setShow(show === false ? true : false)}
      />
      <video ref={vid} className="techno-chest-video" style={{ display: show ? 'block' : 'none' }}>
        <source
          src={require('../assets/Technologies/tools-chest-animation.mp4')}
          type="video/mp4"
        />
      </video>
      <div className="techno-nav-icons">
        <div className="techno-nav-icon">1</div>
        <div className="techno-nav-icon">2</div>
        <div className="techno-nav-icon">3</div>
        <div className="techno-nav-icon">4</div>
        <div className="techno-nav-icon">5</div>
      </div>
      <div className="exit-to-menu-button">BACK TO MENU</div>
    </div>
  );
}

export default Technologies;
