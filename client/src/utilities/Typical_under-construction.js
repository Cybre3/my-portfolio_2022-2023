import React from 'react';
import { TypeAnimation } from 'react-type-animation';

class TypeAnimationUnderConstruction extends React.PureComponent {
  render() {
    return (
      <TypeAnimation
        sequence={[
          'This portfolio',
          2000,
          'is currently undergoing reconstruction.',
          2000,
          'Please check in regularly',
          2000,
          'to see progress and updates!',
          2000,
          'Feel free to explore!',
          5000,
        ]}
        repeat={Infinity}
      />
    );
  }
}

export default TypeAnimationUnderConstruction;
