import React, { Fragment, useRef, useState } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls, Sphere, Plane, Line, PerspectiveCamera } from '@react-three/drei';
import { BackSide, RepeatWrapping, TextureLoader, Vector3 } from 'three';

// import stars from '../assets/background/wp2694502-gaming-background (1).jpg';
/* import starsPurple from '../../assets/Technologies/background/graham-holtshausen-fUnfEz3VLv4-unsplash.jpg'; */
import Station from './Station';

import starsBlack from '../../assets/Technologies/background/blackStarField.png';
import goldEmblem from '../../assets/Technologies/techno-mandala.png';
import reactLogo from '../../assets/Technologies/logos/react-logo.png';
import nodeJsLogo from '../../assets/Technologies/logos/nodejs-logo.png';
import expressLogo from '../../assets/Technologies/logos/expressjs-logo.png';
import mongoDbLogo from '../../assets/Technologies/logos/mongodb-logo.png';
import vsCodeLogo from '../../assets/Technologies/logos/vscode-logo.png';
import gitHubLogo from '../../assets/Technologies/logos/github-logo.png';
import jQueryLogo from '../../assets/Technologies/logos/jquery-logo.png';
import mochaLogo from '../../assets/Technologies/logos/mocha-logo.png';
import fundamentalsLogo from '../../assets/Technologies/html-css-js-logo.png';
import metalTexture from '../../assets/Technologies/textures/goldSlats.png';


function Technologies(props) {
  return (
    <Canvas>
      <PerspectiveCamera
        makeDefault
        fov={80}
        aspect={window.innerWidth / window.innerHeight}
        near={1}
        far={2000}
        position={[0, 0, 40]}
      />
      <ambientLight />
      {/* <directionalLight position={[-2, 5, 2]} intensity={1} /> */}
      <OrbitControls />
      <Galaxy />
      <Stations />
      <SolarSystem />
    </Canvas>
  );
}

function Galaxy() {
  const goldMandala = useLoader(TextureLoader, goldEmblem);
  const stars = useLoader(TextureLoader, starsBlack);
  const mandalaSphereRef = useRef();
  const starsSphereRef = useRef();

  useFrame(() => {
    starsSphereRef.current.rotation.y -= 0.001;
    mandalaSphereRef.current.rotation.y += 0.001;
  });
  return (
    <Fragment>
      <mesh ref={starsSphereRef}>
        <boxBufferGeometry attach="geometry" args={[450, 450, 450]} />
        <meshStandardMaterial map={stars} normalScale={0.2} side={BackSide} />
      </mesh>
      <mesh ref={mandalaSphereRef} rotation={[-20, 8, -5]}>
        <sphereBufferGeometry attach="geometry" args={[849, 64, 40]} />
        <meshStandardMaterial
          map={goldMandala}
          transparent
          normalScale={0.2}
          side={BackSide}
          opacity={0.1}
        />
      </mesh>
    </Fragment>
  );
}

function SolarSystem() {
  const orbitRadiusMultiplier = 1.5;
  let orbitSpeedReducer = 0;

  const vsCode_Teaxture = useLoader(TextureLoader, vsCodeLogo);
  const gitHub_Teaxture = useLoader(TextureLoader, gitHubLogo);
  const jQuery_Teaxture = useLoader(TextureLoader, jQueryLogo);
  const mocha_Teaxture = useLoader(TextureLoader, mochaLogo);
  const fundamentals_Teaxture = useLoader(TextureLoader, fundamentalsLogo);
  fundamentals_Teaxture.wrapS = fundamentals_Teaxture.wrapT = RepeatWrapping;
  fundamentals_Teaxture.repeat.set(3, 1);

  const planets = [
    { _id: 1, texture: vsCode_Teaxture, size: 1 },
    { _id: 2, texture: gitHub_Teaxture, size: 1 },
    { _id: 3, texture: jQuery_Teaxture, size: 1 },
    { _id: 4, texture: mocha_Teaxture, size: 1 },
  ];

  return (
    <mesh position={[0, 0, 0]}>
      {/* SUN */}
      <Sphere args={[5, 32, 32]} rotation={[Math.PI, -4.8, 0]}>
        <meshStandardMaterial map={fundamentals_Teaxture} />
      </Sphere>

      {/* PLANETS */}
      {planets.map((planet, idx) => {
        const multiplier = (idx + 0.1) * orbitRadiusMultiplier;
        idx === 0 ? (orbitSpeedReducer = 0) : (orbitSpeedReducer += 0.1);
        return (
          <RenderSphereNOrbitLine
            sphereSize={planet.size}
            orbitRadiusMultiplier={multiplier}
            orbitSpeedReducer={orbitSpeedReducer}
            lineVisibility={false}
            texture={planet.texture}
          />
        );
      })}
      <Plane args={[140, 140]} rotation={[Math.PI / 2, 0.1, 0]} visible={false} />
    </mesh>
  );
}

function Stations() {
  const express_Texture = useLoader(TextureLoader, expressLogo);
  const react_Texture = useLoader(TextureLoader, reactLogo);
  const nodeJS_Texture = useLoader(TextureLoader, nodeJsLogo);
  const mongoDB_Texture = useLoader(TextureLoader, mongoDbLogo);

  const metal_Texture = useLoader(TextureLoader, metalTexture);

  const capsuleRef1 = useRef();
  const capsuleRef2 = useRef();
  const capsuleRef3 = useRef();
  const capsuleRef4 = useRef();

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

    capsuleRef1.current.rotation.y -= 0.005;
    capsuleRef2.current.rotation.y -= 0.005;
    capsuleRef3.current.rotation.y -= 0.005;
    capsuleRef4.current.rotation.y -= 0.005;
  });

  return (
    <Fragment>
      <Station
        capsulePosition={position}
        capsuleTexture={express_Texture}
        capsuleRef={capsuleRef1}
        stationTexture={metal_Texture}
        stationPosition={[-45, 20, -10]}
      />
      <Station
        capsulePosition={position}
        capsuleTexture={react_Texture}
        capsuleRef={capsuleRef2}
        stationTexture={metal_Texture}
        stationPosition={[45, 20, -10]}
      />
      <Station
        capsulePosition={position}
        capsuleTexture={nodeJS_Texture}
        capsuleRef={capsuleRef3}
        stationTexture={metal_Texture}
        stationPosition={[-45, -20, -10]}
      />
      <Station
        capsulePosition={position}
        capsuleTexture={mongoDB_Texture}
        capsuleRef={capsuleRef4}
        stationTexture={metal_Texture}
        stationPosition={[45, -20, -10]}
      />
    </Fragment>
  );
}

export default Technologies;

function RenderSphereNOrbitLine({
  sphereSize,
  orbitRadiusMultiplier,
  orbitSpeedReducer,
  lineVisibility = true,
  texture,
}) {
  const planetRef = useRef(null);
  const lineRef = useRef(null);
  const orbitPoints = [];
  const numPoints = 100;
  const initial_orbitRadius = 20;
  let orbitSpeed = 0.5;

  useFrame((state, delta) => {
    const elapsedTime = state.clock.getElapsedTime();

    // Set planet orbit animation
    planetRef.current.position.x =
      Math.sin(elapsedTime * (orbitSpeed - orbitSpeedReducer)) *
      initial_orbitRadius *
      orbitRadiusMultiplier;
    planetRef.current.position.z =
      Math.cos(elapsedTime * (orbitSpeed - orbitSpeedReducer)) *
      initial_orbitRadius *
      orbitRadiusMultiplier;

    // Calculate the position of the sphere on the path
    const position = new Vector3(planetRef.current.position.x, 0, planetRef.current.position.z);

    // Apply rotation from the line to the position vector
    const lineRotation = lineRef.current.rotation;
    position.applyEuler(lineRotation);
    planetRef.current.position.copy(position);
    planetRef.current.rotation.copy(lineRotation);
  });

  // Calculate orbit points
  for (let i = 0; i <= numPoints; i++) {
    const angle = (Math.PI * 2 * i) / numPoints;
    const x = Math.cos(angle) * initial_orbitRadius * orbitRadiusMultiplier;
    const z = Math.sin(angle) * initial_orbitRadius * orbitRadiusMultiplier;
    orbitPoints.push(x, 0, z);
  }

  return (
    <mesh>
      <Sphere ref={planetRef} args={[sphereSize, 32, 32]} position={[3, 0, 0]}>
        <meshStandardMaterial map={texture} />
      </Sphere>

      <Line
        ref={lineRef}
        points={orbitPoints}
        color="white"
        lineWidth={1}
        rotation={[Math.PI / 4, 0, 0]} // adjust solar system axis
        visible={lineVisibility}
      />
    </mesh>
  );
}

/* 
<Canvas className="h-[500px]">
<ambientLight intensity={0.5} />
      <directionalLight position={[-2, 5, 2]} intensity={1} />
      <OrbitControls enableZoom={false} />
      <Suspense fallback={null}>
        <Box />
        </Suspense>
        </Canvas>
        function Box() {
          const colorMap = useLoader(TextureLoader, test);
          return (
            <mesh rotation={[90, -1, 40]}>
              <sphereBufferGeometry attach="geometry" args={[1, 360, 360]} />
              <meshStandardMaterial map={colorMap} normalScale={0.2}/>
            </mesh>
          );
        }


         <mesh>
      <Box args={[1000, 1000, 1000]}>
        <meshStandardMaterial map={colorMap} normalScale={0.2} side={BackSide}/>
      </Box>
    </mesh>
*/
