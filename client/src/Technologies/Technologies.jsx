import React, { useState } from 'react';
import $ from 'jquery';

import ToolBoxBar from './ToolBoxBar';
import TechnoNav from './TechnoNav';
import ToolBox from './ToolBox';
import TechCircleContainer from './TechCircleContainer';
import ExitToMenuButton from './ExitToMenuButton';

import './technologies.css';

function Technologies(props) {
  const [show, setShow] = useState(false);

  $(document).ready(function () {
    $('.logo-outer-circle').hover(
      function () {
        $('.right').show();
      },
      function () {
        $('.right').hide();
      }
    );

    $('.logo-inner-circle').hover(
      function () {
        $('.left').show();
      },
      function () {
        $('.left').hide();
      }
    );

    $('.tool-box-logo').hover(
      function () {
        $('.bottom').show();
      },
      function () {
        $('.bottom').hide();
      }
    );
  });

  return (
    <div id="technologies-container">
      <TechCircleContainer />
      <div className="techno-info-box right">
        <h2>Technology Icon Title</h2>
        <p>Some Mumbo jumbo about technology icon</p>
      </div>
      <div className="techno-info-box left">
        <h2>Technology Icon Title</h2>
        <p>Some Mumbo jumbo about technology icon</p>
      </div>
      <div className="techno-info-box bottom">
        <h2>Technology Icon Title</h2>
        <p>Some Mumbo jumbo about technology icon</p>
      </div>
      <ToolBoxBar show={show} />
      <ToolBox show={show} setShow={setShow} />
      <TechnoNav />
      <ExitToMenuButton />
    </div>
  );
}

export default Technologies;
