import React, { Fragment, useRef, useState } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls, Sphere, Plane, Line, PerspectiveCamera, Cylinder } from '@react-three/drei';
import { BackSide, DoubleSide, RepeatWrapping, TextureLoader, Vector3 } from 'three';

// import stars from '../assets/background/wp2694502-gaming-background (1).jpg';
import starsPurple from '../assets/Technologies/background/graham-holtshausen-fUnfEz3VLv4-unsplash.jpg';
import goldEmblem from '../assets/Technologies/techno-mandala.png';
import reactLogo from '../assets/Technologies/logos/react-logo.png';
import nodeJsLogo from '../assets/Technologies/logos/nodejs-logo.png';
import expressLogo from '../assets/Technologies/logos/expressjs-logo.png';
import mongoDbLogo from '../assets/Technologies/logos/mongodb-logo.png';
import vsCodeLogo from '../assets/Technologies/logos/vscode-logo.png';
import gitHubLogo from '../assets/Technologies/logos/github-logo.png';
import jQueryLogo from '../assets/Technologies/logos/jquery-logo.png';
import mochaLogo from '../assets/Technologies/logos/mocha-logo.png';
import fundamentalsLogo from '../assets/Technologies/html-css-js-logo.png';

function Technologies(props) {
  return (
    <Canvas>
      <PerspectiveCamera
        makeDefault
        fov={100}
        aspect={window.innerWidth / window.innerHeight}
        near={1}
        far={2000}
        position={[0, -30, 350]}
      />
      <ambientLight />
      <directionalLight position={[-2, 5, 2]} intensity={1} />
      <OrbitControls />
      <Galaxy />
      <Stations />
      <SolarSystem />
    </Canvas>
  );
}

function Galaxy() {
  const goldMandala = useLoader(TextureLoader, goldEmblem);
  const stars = useLoader(TextureLoader, starsPurple);
  const mandalaSphereRef = useRef();
  const starsSphereRef = useRef();

  useFrame(() => {
    starsSphereRef.current.rotation.y -= 0.001;
    mandalaSphereRef.current.rotation.y += 0.001;
  });
  return (
    <Fragment>
      <mesh ref={starsSphereRef}>
        <sphereBufferGeometry attach="geometry" args={[650, 64, 40]} />
        <meshStandardMaterial map={stars} normalScale={0.2} side={BackSide} />
      </mesh>
      <mesh ref={mandalaSphereRef} rotation={[-20, 8, -5]}>
        <sphereBufferGeometry attach="geometry" args={[649, 64, 40]} />
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
  const orbitRadiusMultiplier = 3.5;
  let orbitSpeedReducer = 0;

  const vsCode_Teaxture = useLoader(TextureLoader, vsCodeLogo);
  const gitHub_Teaxture = useLoader(TextureLoader, gitHubLogo);
  const jQuery_Teaxture = useLoader(TextureLoader, jQueryLogo);
  const mocha_Teaxture = useLoader(TextureLoader, mochaLogo);
  const fundamentals_Teaxture = useLoader(TextureLoader, fundamentalsLogo);
  fundamentals_Teaxture.wrapS = fundamentals_Teaxture.wrapT = RepeatWrapping;
  fundamentals_Teaxture.repeat.set(3, 1);

  const planets = [
    { _id: 1, texture: vsCode_Teaxture, size: 20 },
    { _id: 2, texture: gitHub_Teaxture, size: 20 },
    { _id: 3, texture: jQuery_Teaxture, size: 20 },
    { _id: 4, texture: mocha_Teaxture, size: 20 },
  ];

  return (
    <mesh position={[0, 160, -70]}>
      {/* SUN */}
      <Sphere args={[70, 32, 32]} rotation={[Math.PI, -4.8, 0]}>
        <meshStandardMaterial map={fundamentals_Teaxture} />
      </Sphere>

      {/* PLANETS */}
      {planets.map((planet, idx) => {
        const multiplier = (idx + 2) * orbitRadiusMultiplier;
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
  const react_Teaxture = useLoader(TextureLoader, reactLogo);
  const nodeJs_Teaxture = useLoader(TextureLoader, nodeJsLogo);
  const express_Teaxture = useLoader(TextureLoader, expressLogo);
  const mongoDb_Teaxture = useLoader(TextureLoader, mongoDbLogo);

  const capsuleRef1 = useRef();
  const capsuleRef2 = useRef();
  const capsuleRef3 = useRef();
  const capsuleRef4 = useRef();

  const initialPosition = [0, 25, -50]; // Initial position of the shape
  const [position, setPosition] = useState(initialPosition);
  const [direction, setDirection] = useState(1);

  useFrame(() => {
    // Calculate the y position based on direction
    const zPosition = position[2] + direction * 0.1;

    // Check if the shape hits the bouncing boundaries
    if (zPosition > initialPosition[2] + 5) {
      setDirection(-2);
    } else if (zPosition < initialPosition[2] - 5) {
      setDirection(2);
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
      {/* plane1 */}
      <Plane
        args={[150, 150]}
        rotation={[Math.PI / 1.8, 0, 5.0]}
        visible={true}
        position={[-500, 165, -20]}
      >
        <mesh ref={capsuleRef1} rotation={[Math.PI / 2.5, 0, 0]} position={position}>
          <capsuleGeometry args={[20, 20, 40, 32]} />
          <meshStandardMaterial map={react_Teaxture} />
        </mesh>
        {/* HALF CYCLINDER FRONT */}
        <Cylinder
          args={[60, 60, 1, 60, 1, true, Math.PI / 2, Math.PI]}
          rotation={[0, 0, 0]}
          position={[0, -10, 0]}
          scale={[1, 1, 2]}
        >
          <meshStandardMaterial color="white" side={DoubleSide} />
        </Cylinder>
        {/* HALF CYCLINDER BACK */}
        <Cylinder
          args={[60, 60, 1, 60, 1, false, Math.PI / 2, Math.PI]}
          rotation={[0, 0, 0]}
          position={[0, -11, 0]}
          scale={[0.9, 1, 1.9]}
        >
          <meshStandardMaterial color="gray" side={DoubleSide} />
        </Cylinder>

        <Cylinder
          args={[2, 2, 50, 20, 1]}
          rotation={[Math.PI / 2, 0, 0]}
          position={[-70, 70, -25]}
          scale={[0.9, 1, 1.9]}
        >
          <meshStandardMaterial color="gray" side={DoubleSide} />
        </Cylinder>

        <Cylinder
          args={[2, 2, 50, 20, 1]}
          rotation={[Math.PI / 2, 0, 0]}
          position={[70, 70, -25]}
          scale={[0.9, 1, 1.9]}
        >
          <meshStandardMaterial color="gray" side={DoubleSide} />
        </Cylinder>

        <meshBasicMaterial color="gray" side={DoubleSide} />
      </Plane>
      {/* plane 2 */}
      <Plane
        args={[150, 150]}
        rotation={[Math.PI / 1.8, 0, -5.0]}
        visible={true}
        position={[500, 165, -20]}
      >
        <mesh ref={capsuleRef2} rotation={[Math.PI / -1.7, 4, 0]} position={position}>
          <capsuleGeometry args={[20, 20, 1, 15]} />
          <meshStandardMaterial map={nodeJs_Teaxture} />
        </mesh>
        {/* HALF CYCLINDER FRONT */}
        <Cylinder
          args={[60, 60, 1, 60, 1, true, Math.PI / 2, Math.PI]}
          rotation={[0, 0, 0]}
          position={[0, -10, 0]}
          scale={[1, 1, 2]}
        >
          <meshStandardMaterial color="white" side={DoubleSide} />
        </Cylinder>
        {/* HALF CYCLINDER BACK */}
        <Cylinder
          args={[60, 60, 1, 60, 1, false, Math.PI / 2, Math.PI]}
          rotation={[0, 0, 0]}
          position={[0, -11, 0]}
          scale={[0.9, 1, 1.9]}
        >
          <meshStandardMaterial color="gray" side={DoubleSide} />
        </Cylinder>

        <Cylinder
          args={[2, 2, 50, 20, 1]}
          rotation={[Math.PI / 2, 0, 0]}
          position={[-70, 70, -25]}
          scale={[0.9, 1, 1.9]}
        >
          <meshStandardMaterial color="gray" side={DoubleSide} />
        </Cylinder>

        <Cylinder
          args={[2, 2, 50, 20, 1]}
          rotation={[Math.PI / 2, 0, 0]}
          position={[70, 70, -25]}
          scale={[0.9, 1, 1.9]}
        >
          <meshStandardMaterial color="gray" side={DoubleSide} />
        </Cylinder>

        <meshBasicMaterial color="gray" side={DoubleSide} />
      </Plane>
      {/* plane 3 */}
      <Plane
        args={[150, 150]}
        rotation={[Math.PI / 1.8, 0, 5.0]}
        visible={true}
        position={[-560, -165, -20]}
      >
        <mesh ref={capsuleRef3} rotation={[Math.PI / -1.7, 4, 0]} position={position}>
          <capsuleGeometry args={[18, 45, 1, 25]} />
          <meshStandardMaterial map={express_Teaxture} />
        </mesh>
        {/* HALF CYCLINDER FRONT */}
        <Cylinder
          args={[60, 60, 1, 60, 1, true, Math.PI / 2, Math.PI]}
          rotation={[0, 0, 0]}
          position={[0, -10, 0]}
          scale={[1, 1, 2]}
        >
          <meshStandardMaterial color="white" side={DoubleSide} />
        </Cylinder>
        {/* HALF CYCLINDER BACK */}
        <Cylinder
          args={[60, 60, 1, 60, 1, false, Math.PI / 2, Math.PI]}
          rotation={[0, 0, 0]}
          position={[0, -11, 0]}
          scale={[0.9, 1, 1.9]}
        >
          <meshStandardMaterial color="gray" side={DoubleSide} />
        </Cylinder>

        <Cylinder
          args={[2, 2, 50, 20, 1]}
          rotation={[Math.PI / 2, 0, 0]}
          position={[-70, 70, -25]}
          scale={[0.9, 1, 1.9]}
        >
          <meshStandardMaterial color="gray" side={DoubleSide} />
        </Cylinder>

        <Cylinder
          args={[2, 2, 50, 20, 1]}
          rotation={[Math.PI / 2, 0, 0]}
          position={[70, 70, -25]}
          scale={[0.9, 1, 1.9]}
        >
          <meshStandardMaterial color="gray" side={DoubleSide} />
        </Cylinder>

        <meshBasicMaterial color="gray" side={DoubleSide} />
      </Plane>
      {/* plane 4 */}
      <Plane
        args={[150, 150]}
        rotation={[Math.PI / 1.8, 0, -5.0]}
        visible={true}
        position={[560, -165, -20]}
      >
        <mesh ref={capsuleRef4} rotation={[Math.PI / -1.7, 4, 0]} position={position}>
          <capsuleGeometry args={[18, 45, 1, 25]} />
          <meshStandardMaterial map={mongoDb_Teaxture} />
        </mesh>
        {/* HALF CYCLINDER FRONT */}
        <Cylinder
          args={[60, 60, 1, 60, 1, true, Math.PI / 2, Math.PI]}
          rotation={[0, 0, 0]}
          position={[0, -10, 0]}
          scale={[1, 1, 2]}
        >
          <meshStandardMaterial color="white" side={DoubleSide} />
        </Cylinder>
        {/* HALF CYCLINDER BACK */}
        <Cylinder
          args={[60, 60, 1, 60, 1, false, Math.PI / 2, Math.PI]}
          rotation={[0, 0, 0]}
          position={[0, -11, 0]}
          scale={[0.9, 1, 1.9]}
        >
          <meshStandardMaterial color="gray" side={DoubleSide} />
        </Cylinder>

        <Cylinder
          args={[2, 2, 50, 20, 1]}
          rotation={[Math.PI / 2, 0, 0]}
          position={[-70, 70, -25]}
          scale={[0.9, 1, 1.9]}
        >
          <meshStandardMaterial color="gray" side={DoubleSide} />
        </Cylinder>

        <Cylinder
          args={[2, 2, 50, 20, 1]}
          rotation={[Math.PI / 2, 0, 0]}
          position={[70, 70, -25]}
          scale={[0.9, 1, 1.9]}
        >
          <meshStandardMaterial color="gray" side={DoubleSide} />
        </Cylinder>

        <meshBasicMaterial color="gray" side={DoubleSide} />
      </Plane>
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
