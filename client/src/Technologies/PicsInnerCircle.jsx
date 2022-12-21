import React from 'react';

function PicsInnerCircle(props) {
  return (
    <div className="pics-inner-circle">
      <img
        className="logo-inner-circle deg-0"
        src={require('../assets/Technologies/logos/expressjs-logo.png')}
        alt=""
      />
      <img
        className="logo-inner-circle deg-90"
        src={require('../assets/Technologies/logos/react-logo.png')}
        alt=""
      />
      <img
        className="logo-inner-circle deg-180"
        src={require('../assets/Technologies/logos/nodejs-logo.png')}
        alt=""
      />
      <img
        className="logo-inner-circle deg-270"
        src={require('../assets/Technologies/logos/mongodb-logo.png')}
        alt=""
      />
    </div>
  );
}

export default PicsInnerCircle;
