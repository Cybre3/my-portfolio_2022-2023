import React from 'react';

function PicsOuterCircle(props) {
  return (
    <div className="pics-outer-circle">
      <img
        className="logo-outer-circle deg-0-outer"
        src={require('../assets/Technologies/logos/vscode-logo.png')}
        alt=""
      />
      <img
        className="logo-outer-circle deg-45-outer"
        src={require('../assets/Technologies/logos/bootstrap-logo.png')}
        alt=""
      />
      <img
        className="logo-outer-circle deg-90-outer"
        src={require('../assets/Technologies/logos/jquery-logo.png')}
        alt=""
      />
      <img
        className="logo-outer-circle deg-135-outer"
        src={require('../assets/Technologies/logos/jest-logo.png')}
        alt=""
      />
      <img
        className="logo-outer-circle deg-180-outer"
        src={require('../assets/Technologies/logos/mocha-logo.png')}
        alt=""
      />
      <img
        className="logo-outer-circle deg-225-outer"
        src={require('../assets/Technologies/logos/github-logo.png')}
        alt=""
      />
      <img
        className="logo-outer-circle deg-270-outer"
        src={require('../assets/Technologies/logos/firebase-logo.png')}
        alt=""
      />
      <img
        className="logo-outer-circle deg-315-outer"
        src={require('../assets/Technologies/logos/typescript-logo-sm.png')}
        alt=""
      />
    </div>
  );
}

export default PicsOuterCircle;