import React, { 
  // Fragment, 
  // useRef, 
  // useState 
} from 'react';
// import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import {
  // OrbitControls,
  // Sphere,
  // PerspectiveCamera,
  Cylinder,
  Torus,
  // useHelper,
  // Circle,
  Capsule,
  // TorusKnot,
} from '@react-three/drei';
import { 
  // TextureLoader, 
  // SpotLightHelper, 
  DoubleSide 
} from 'three';

// import expressLogo from './assets/Technologies/logos/expressjs-logo.png';
// import metalTexture from './assets/Technologies/textures/goldSlats.png';

function Core(props) {
  return (
    <mesh rotation={[0, 0, 0]} position={[0, -10, 0]}>
      {/* BACK PLATFORM */}
      <Cylinder args={[8, 8, 16, 120]} rotation={[0, 0, 0]}>
        <meshStandardMaterial color="gray" side={DoubleSide} />
        {/* BRIDGE */}
        <Cylinder
          args={[7.8, 8, 22, 3, 1, true, 1.71, 6]}
          position={[0, 6, -16]}
          rotation={[0, Math.PI / 2, Math.PI / -2.5]}
        >
          <meshStandardMaterial color="gray" side={DoubleSide} />
        </Cylinder>
        {/* STEPS */}
        {/* TOP STEP */}
        <Cylinder args={[5.4, 5.4, 0.8]} position={[0, 15.6, -27]} rotation={[0.1, 0, 0]}>
          <meshStandardMaterial color="gray" />
          {/* CORE PLATFORM */}
          <Cylinder args={[2.5, 2.2, 0.8, 10, 1]} position={[0, 1, 0]}>
            <meshStandardMaterial color="blue" />
          </Cylinder>
          {/* CORE STANTIONS */}
          <Cylinder
            args={[0.2, 0.4, 2.3, 2, 11, false, -0.7, 1.4]}
            position={[0, 2.3, 1.8]}
            rotation={[-0.4, 0, 0]}
          >
            <meshStandardMaterial color="red" side={DoubleSide} />
          </Cylinder>
          <Cylinder
            args={[0.2, 0.4, 2.3, 2, 11, false, -0.1, 1.4]}
            position={[1.05, 2.3, 1.45]}
            rotation={[-0.35, 0, 0.25]}
          >
            <meshStandardMaterial color="red" side={DoubleSide} />
          </Cylinder>
          <Cylinder
            args={[0.2, 0.4, 2.3, 2, 11, false, 0.55, 1.4]}
            position={[1.75, 2.3, 0.55]}
            rotation={[-0.15, 0, 0.35]}
          >
            <meshStandardMaterial color="red" side={DoubleSide} />
          </Cylinder>
          <Cylinder
            args={[0.2, 0.4, 2.3, 2, 11, false, 1.15, 1.4]}
            position={[1.75, 2.3, -0.6]}
            rotation={[0.05, 0, 0.35]}
          >
            <meshStandardMaterial color="red" side={DoubleSide} />
          </Cylinder>
          <Cylinder
            args={[0.2, 0.4, 2.3, 2, 11, false, 1.85, 1.4]}
            position={[1.05, 2.3, -1.52]}
            rotation={[0.25, 0, 0.25]}
          >
            <meshStandardMaterial color="red" side={DoubleSide} />
          </Cylinder>
          <Cylinder
            args={[0.2, 0.4, 2.3, 2, 11, false, 2.3, 1.4]}
            position={[0, 2.3, -1.8]}
            rotation={[0.4, 0, 0]}
          >
            <meshStandardMaterial color="red" side={DoubleSide} />
          </Cylinder>
          <Cylinder
            args={[0.2, 0.4, 2.3, 2, 11, false, 3, 1.4]}
            position={[-1, 2.3, -1.4]}
            rotation={[0.35, 0, -0.25]}
          >
            <meshStandardMaterial color="red" side={DoubleSide} />
          </Cylinder>
          <Cylinder
            args={[0.2, 0.4, 2.3, 2, 11, false, 3.6, 1.4]}
            position={[-1.7, 2.3, -0.55]}
            rotation={[0.1, 0, -0.35]}
          >
            <meshStandardMaterial color="red" side={DoubleSide} />
          </Cylinder>
          <Cylinder
            args={[0.2, 0.4, 2.3, 2, 11, false, 4.3, 1.4]}
            position={[-1.7, 2.3, 0.5]}
            rotation={[-0.15, 0, -0.35]}
          >
            <meshStandardMaterial color="red" side={DoubleSide} />
          </Cylinder>
          <Cylinder
            args={[0.2, 0.4, 2.3, 2, 11, false, 5, 1.4]}
            position={[-1.05, 2.3, 1.45]}
            rotation={[-0.35, 0, -0.25]}
          >
            <meshStandardMaterial color="red" side={DoubleSide} />
          </Cylinder>
        </Cylinder>
        {/* MID STEP */}
        <Cylinder args={[6.1, 6.1, 0.8]} position={[0, 14.8, -27]} rotation={[0.1, 0, 0]}>
          /<meshStandardMaterial color="gray" />{' '}
        </Cylinder>{' '}
        {/* BOTTOM STEP */}
        <Cylinder args={[6.8, 6.8, 0.8]} position={[0, 14.1, -27]} rotation={[0.1, 0, 0]}>
          <meshStandardMaterial color="gray" />
          {/* BACK OF STEPS TOWERS */}
          <Capsule args={[0.5, 12, 1, 8]} position={[0, 6, -4.5]} rotation={[0.4, 0, 0]}>
            <meshStandardMaterial color="gray" />
          </Capsule>
          <Capsule args={[0.5, 11, 1, 8]} position={[1.5, 6, -4.5]} rotation={[0.4, 0, 0]}>
            <meshStandardMaterial color="gray" />
          </Capsule>
          <Capsule args={[0.5, 11, 1, 8]} position={[-1.5, 6, -4.5]} rotation={[0.4, 0, 0]}>
            <meshStandardMaterial color="gray" />
          </Capsule>
          <Capsule args={[0.5, 10, 1, 8]} position={[3, 5.5, -4]} rotation={[0.4, 0, 0]}>
            <meshStandardMaterial color="gray" />
          </Capsule>
          <Capsule args={[0.5, 10, 1, 8]} position={[-3, 5.5, -4]} rotation={[0.4, 0, 0]}>
            <meshStandardMaterial color="gray" />
          </Capsule>
          <Capsule args={[0.5, 9, 1, 8]} position={[4.5, 5, -3]} rotation={[0.4, 0, 0]}>
            <meshStandardMaterial color="gray" />
          </Capsule>
          <Capsule args={[0.5, 9, 1, 8]} position={[-4.5, 5, -3]} rotation={[0.4, 0, 0]}>
            <meshStandardMaterial color="gray" />
          </Capsule>
          <Capsule args={[0.5, 8, 1, 8]} position={[5.5, 4.5, -1.5]} rotation={[0.4, 0, 0]}>
            <meshStandardMaterial color="gray" />
          </Capsule>
          <Capsule args={[0.5, 8, 1, 8]} position={[-5.5, 4.5, -1.5]} rotation={[0.4, 0, 0]}>
            <meshStandardMaterial color="gray" />
          </Capsule>
          <Capsule args={[0.5, 7, 1, 8]} position={[6.5, 4, 0]} rotation={[0.4, 0, 0]}>
            <meshStandardMaterial color="gray" />
          </Capsule>
          <Capsule args={[0.5, 7, 1, 8]} position={[-6.5, 4, 0]} rotation={[0.4, 0, 0]}>
            <meshStandardMaterial color="gray" />
          </Capsule>
          <Capsule args={[0.5, 6, 1, 8]} position={[6.5, 3.5, 2]} rotation={[0.4, 0, 0]}>
            <meshStandardMaterial color="gray" />
          </Capsule>
          <Capsule args={[0.5, 6, 1, 8]} position={[-6.5, 3.5, 2]} rotation={[0.4, 0, 0]}>
            <meshStandardMaterial color="gray" />
          </Capsule>
          <Capsule args={[0.5, 5, 1, 8]} position={[6, 3, 4]} rotation={[0.4, 0, 0]}>
            <meshStandardMaterial color="gray" />
          </Capsule>
          <Capsule args={[0.5, 5, 1, 8]} position={[-6, 3, 4]} rotation={[0.4, 0, 0]}>
            <meshStandardMaterial color="gray" />
          </Capsule>
          {/* THRONE BOTTOM TOWER */}
          {/* REACTOR HARDWARE */}
          <Torus args={[9, 2, 4]} rotation={[Math.PI / -3.5, 0, 0]} position={[0, 0, 0]}>
            <meshStandardMaterial color="gray" />
          </Torus>
          <Torus args={[9, 2, 4]} rotation={[Math.PI / -3.5, 0, 0]} position={[0, -1, -1]}>
            <meshStandardMaterial color="gray" />
          </Torus>
          <Torus args={[9, 2, 4]} rotation={[Math.PI / -3.5, 0, 0]} position={[0, -2, -2]}>
            <meshStandardMaterial color="gray" />
          </Torus>
          <Torus args={[9, 2, 4]} rotation={[Math.PI / -3.5, 0, 0]} position={[0, -3, -3]}>
            <meshStandardMaterial color="gray" />
          </Torus>
          <Torus args={[9, 2, 4]} rotation={[Math.PI / -3.2, 0, 0]} position={[0, -3.5, -3.5]}>
            <meshStandardMaterial color="gray" />
          </Torus>
          <Torus args={[9, 2, 4]} rotation={[Math.PI / -3, 0, 0]} position={[0, -4.5, -4.3]}>
            <meshStandardMaterial color="gray" />
          </Torus>
          <Torus args={[9, 2, 4]} rotation={[Math.PI / -2.8, 0, 0]} position={[0, -5.5, -5]}>
            <meshStandardMaterial color="gray" />
          </Torus>
          <Torus args={[9, 2, 4]} rotation={[Math.PI / -2.6, 0, 0]} position={[0, -6.5, -5.8]}>
            <meshStandardMaterial color="gray" />
          </Torus>
          {/* PLATFORM TOP */}
          <Torus args={[12.5, 1, 8]} rotation={[Math.PI / 2, 0, 0]} position={[0, -7.5, -5]}>
            <meshStandardMaterial color="gray" />
          </Torus>
          <Torus args={[12.5, 1, 8]} rotation={[Math.PI / 2, 0, 0]} position={[0, -7, -5]}>
            <meshStandardMaterial color="gray" />
          </Torus>
          <Torus args={[12.5, 1, 8]} rotation={[Math.PI / 2, 0, 0]} position={[0, -6.5, -5]}>
            <meshStandardMaterial color="gray" />
          </Torus>
          <Torus args={[12.5, 1, 8]} rotation={[Math.PI / 2, 0, 0]} position={[0, -6, -5]}>
            <meshStandardMaterial color="gray" />
          </Torus>
          <Torus args={[12.5, 1, 8]} rotation={[Math.PI / 2, 0, 0]} position={[0, -5.5, -5]}>
            <meshStandardMaterial color="gray" />
          </Torus>
          <Torus args={[12.5, 1, 8]} rotation={[Math.PI / 2, 0, 0]} position={[0, -5, -5]}>
            <meshStandardMaterial color="gray" />
          </Torus>
          <Torus args={[12.5, 1, 8]} rotation={[Math.PI / 2, 0, 0]} position={[0, -4.5, -5]}>
            <meshStandardMaterial color="gray" />
          </Torus>
          <Torus args={[12.5, 1, 8]} rotation={[Math.PI / 2, 0, 0]} position={[0, -4, -5]}>
            <meshStandardMaterial color="gray" />
          </Torus>
          <Torus args={[12.5, 1, 8]} rotation={[Math.PI / 2, 0, 0]} position={[0, -3.5, -5]}>
            <meshStandardMaterial color="gray" />
          </Torus>
          <Torus args={[12.5, 1, 8]} rotation={[Math.PI / 2, 0, 0]} position={[0, -3, -5]}>
            <meshStandardMaterial color="gray" />
          </Torus>
          <Torus args={[12.5, 1, 8]} rotation={[Math.PI / 2, 0, 0]} position={[0, -2.5, -5]}>
            <meshStandardMaterial color="gray" />
          </Torus>
          {/* PLATFORM BOTTOM */}
          <Cylinder args={[13, 12, 16, 120]} position={[0, -13, -5]}>
            <meshStandardMaterial color="gray" />
          </Cylinder>
        </Cylinder>
      </Cylinder>
    </mesh>
  );
}

export default Core;
