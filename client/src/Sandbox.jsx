import React, { Fragment, useRef, useState } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import {
  OrbitControls,
  Sphere,
  PerspectiveCamera,
  Cylinder,
  Torus,
  useHelper,
  Circle,
} from '@react-three/drei';
import { TextureLoader, SpotLightHelper, DoubleSide } from 'three';

import expressLogo from './assets/Technologies/logos/expressjs-logo.png';
import metalTexture from './assets/Technologies/textures/goldSlats.png';

function Sandbox(props) {
  const Lights = () => {
    const spotLight = useRef(null);
    const spotLight2 = useRef(null);
    const spotLight3 = useRef(null);
    const spotLight4 = useRef(null);
    // useHelper(spotLight, SpotLightHelper);
    useHelper(spotLight2, SpotLightHelper, 'red');
    // useHelper(spotLight3, SpotLightHelper, 'yellow');
    // useHelper(spotLight4, SpotLightHelper, 'blue');

    return (
      <>
        {/*  <directionalLight
          color="white"
          position={[-10, 10, 5]}
          intensity={1}
          ref={dirLight}
          castShadow
          shadow-mapSize={[1024, 1024]}
        >
          <orthographicCamera attach="shadow-camera" args={[-10, 10, 10, -10]} />
        </directionalLight> */}
        {/*    <spotLight
          color="white"
          position={[-45, 50, -25]}
          intensity={1}
          ref={spotLight}
          castShadow
          angle={45}
          distance={200}
        /> */}
        <spotLight
          color="red"
          position={[90, -65, 0]}
          intensity={15}
          ref={spotLight2}
          castShadow
          angle={100}
          distance={250}
        />
        {/*   <spotLight
          color="white"
          position={[0, 15, -5]}
          intensity={1}
          ref={spotLight3}
          castShadow
          penumbra={1}
          angle={35}
          distance={75}
        /> */}
        {/*  <spotLight
          color="white"
          position={[-20, -20, 25]}
          intensity={1}
          ref={spotLight4}
          castShadow
          angle={85}
          distance={200}
        /> */}
      </>
    );
  };

  return (
    <Canvas>
      <PerspectiveCamera
        makeDefault
        fov={75}
        aspect={window.innerWidth / window.innerHeight}
        near={1}
        far={2000}
        position={[0, 0, 10]}
      />
      <ambientLight />
      <Lights />
      <OrbitControls />
      {/* <Stations /> */}
      <Core />
    </Canvas>
  );
}

function Stations() {
  const express_Texture = useLoader(TextureLoader, expressLogo);
  const metal_Texture = useLoader(TextureLoader, metalTexture);

  const capsuleRef3 = useRef();

  const initialPosition = [0, 0, -9]; // Initial position of the shape
  const [position, setPosition] = useState(initialPosition);

  const [direction, setDirection] = useState(1);

  useFrame(() => {
    // Calculate the y position based on direction
    const zPosition = position[2] + direction * 0.1;

    // Check if the shape hits the bouncing boundaries
    if (zPosition > initialPosition[2] + 1) {
      setDirection(-0.3);
    } else if (zPosition < initialPosition[2] - 1) {
      setDirection(0.3);
    }

    // Update the position of the shape
    setPosition([position[0], position[1], zPosition]);

    capsuleRef3.current.rotation.y -= 0.005;
  });

  return (
    <mesh position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]} receiveShadow>
      <mesh ref={capsuleRef3} rotation={[Math.PI / -1.7, 4, 0]} position={position}>
        <capsuleGeometry args={[1, 2, 1, 15]} />
        <meshStandardMaterial map={express_Texture} />
      </mesh>
      {/* STATION - CENTER OF STATION */}
      <Cylinder args={[0.4, 0.4, 9.5, 36, 21]} rotation={[Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
        <meshStandardMaterial map={metal_Texture} />
      </Cylinder>
      {/* STATION - RING TOP */}
      <Torus args={[3.05, 0.2, 7, 30]} rotation={[0, 0, 0]} position={[0, 0, -3.4]}>
        <meshStandardMaterial map={metal_Texture} />
      </Torus>
      {/* STATION - TOP */}
      <Torus args={[0.2, 0.5, 26, 30]} position={[0, 0, -4.2]}>
        <meshStandardMaterial map={metal_Texture} />
      </Torus>
      <Sphere args={[1.1, 36, 36]} position={[0, 0, -3.3]}>
        <meshStandardMaterial map={metal_Texture} />
      </Sphere>
      {/* PATHWAYS - TOP */}
      <Cylinder
        args={[0.1, 0.1, 2.1, 36, 36]}
        rotation={[0, 0, Math.PI / 3]}
        position={[-1.8, 1, -3.4]}
      >
        <meshStandardMaterial map={metal_Texture} />
      </Cylinder>
      <Cylinder
        args={[0.1, 0.1, 2.1, 36, 36]}
        rotation={[0, 0, Math.PI / -3]}
        position={[1.8, 1, -3.4]}
      >
        <meshStandardMaterial map={metal_Texture} />
      </Cylinder>
      <Cylinder
        args={[0.1, 0.1, 2.1, 36, 36]}
        rotation={[0, 0, Math.PI / -3]}
        position={[-1.8, -1, -3.4]}
      >
        <meshStandardMaterial map={metal_Texture} />
      </Cylinder>
      <Cylinder
        args={[0.1, 0.1, 2.1, 36, 36]}
        rotation={[0, 0, Math.PI / 3]}
        position={[1.8, -1, -3.4]}
      >
        <meshStandardMaterial map={metal_Texture} />
      </Cylinder>

      {/* STATION - CENTER */}

      {/* STATION - CIRCLE INNER */}
      <Cylinder args={[0.6, 0.6, 1.2, 36, 21]} rotation={[Math.PI / 2, 0, 0]} position={[0, 0, -1]}>
        <meshStandardMaterial map={metal_Texture} />
      </Cylinder>

      <Cylinder
        args={[1.6, 1.6, 0.5, 36, 36]}
        rotation={[Math.PI / 2, 0, 0]}
        position={[0, 0, -0.2]}
      >
        <meshStandardMaterial map={metal_Texture} />
      </Cylinder>
      <Torus args={[1.8, 0.4, 7, 30]} rotation={[0, 0, 0]} position={[0, 0, -0.2]}>
        <meshStandardMaterial map={metal_Texture} />
      </Torus>
      {/* PATHWAYS */}
      <Cylinder
        args={[0.1, 0.1, 4, 36, 36]}
        rotation={[0, 0, Math.PI / 6]}
        position={[-2, 3.4, -0.2]}
      >
        <meshStandardMaterial map={metal_Texture} />
      </Cylinder>
      <Cylinder
        args={[0.1, 0.1, 4, 36, 36]}
        rotation={[0, 0, Math.PI / -6]}
        position={[2, 3.4, -0.2]}
      >
        <meshStandardMaterial map={metal_Texture} />
      </Cylinder>
      <Cylinder
        args={[0.1, 0.1, 4, 36, 36]}
        rotation={[0, 0, Math.PI / -6]}
        position={[-2, -3.4, -0.2]}
      >
        <meshStandardMaterial map={metal_Texture} />
      </Cylinder>
      <Cylinder
        args={[0.1, 0.1, 4, 36, 36]}
        rotation={[0, 0, Math.PI / 6]}
        position={[2, -3.4, -0.2]}
      >
        <meshStandardMaterial map={metal_Texture} />
      </Cylinder>
      <Cylinder
        args={[0.1, 0.1, 4, 36, 36]}
        rotation={[0, 0, Math.PI / 2]}
        position={[3.5, 0, -0.2]}
      >
        <meshStandardMaterial map={metal_Texture} />
      </Cylinder>
      <Cylinder
        args={[0.1, 0.1, 4, 36, 36]}
        rotation={[0, 0, Math.PI / 2]}
        position={[-3.5, 0, -0.2]}
      >
        <meshStandardMaterial map={metal_Texture} />
      </Cylinder>

      {/* STATION - CIRCLE OUTER */}
      <Torus args={[6, 0.3, 5, 30, 20]} rotation={[0, 0, 0]} position={[0, 0, -0.2]}>
        <meshStandardMaterial map={metal_Texture} />
      </Torus>

      {/* BOTTOM OF STATION */}
      <Cylinder
        args={[0.7, 0.7, 1.8, 36, 36]}
        rotation={[Math.PI / 2, 0, 0]}
        position={[0, 0, 3.6]}
      >
        <meshStandardMaterial map={metal_Texture} />
      </Cylinder>
      <Cylinder args={[1, 1, 0.25, 36, 36]} rotation={[Math.PI / 2, 0, 0]} position={[0, 0, 3.6]}>
        <meshStandardMaterial map={metal_Texture} />
      </Cylinder>
      <Cylinder
        args={[0.9, 0.9, 0.15, 36, 36]}
        rotation={[Math.PI / 2, 0, 0]}
        position={[0, 0, 4.1]}
      >
        <meshStandardMaterial map={metal_Texture} />
      </Cylinder>
    </mesh>
  );
}

function Core() {
  return (
    <mesh rotation={[0, 0, 0]} position={[-9, -54, 0]}>
      {/* STEPS */}
      <Cylinder args={[6, 6, 1]} position={[22, 55, -20]} rotation={[0.05, 0, 0]}>
        <meshStandardMaterial color="green" />
      </Cylinder>
      <Cylinder args={[7, 7, 1]} position={[22, 54, -20]} rotation={[0.05, 0, 0]}>
        <meshStandardMaterial color="blue" />
      </Cylinder>
      <Cylinder args={[8, 8, 1]} position={[22, 53, -20]} rotation={[0.05, 0, 0]}>
        <meshStandardMaterial color="red" />
      </Cylinder>
      {/* BRIDGE */}
      <Cylinder
        args={[14, 15, 50, 3, 1, true, 1.7, 6]}
        position={[-1, 37, -12]}
        rotation={[0, Math.PI / 9, Math.PI / -2.5]}
      >
        <meshStandardMaterial color="white" side={DoubleSide} />
      </Cylinder>
      <Circle args={[50, 300]}>
        <meshStandardMaterial color="green" side={DoubleSide} />
      </Circle>
    </mesh>
  );
}

export default Sandbox;
