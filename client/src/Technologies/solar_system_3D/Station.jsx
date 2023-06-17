import React from 'react';
import {
  Sphere,
  Cylinder,
  Torus,
} from '@react-three/drei';

function Station({capsuleRef, capsulePosition, capsuleTexture, stationTexture, stationPosition}) {
  return (
    <mesh position={stationPosition} rotation={[Math.PI / 2, 0, 0]} receiveShadow>
      <mesh ref={capsuleRef} rotation={[Math.PI / -1.7, 4, 0]} position={capsulePosition}>
        <capsuleGeometry args={[1, 2, 1, 15]} />
        <meshStandardMaterial map={capsuleTexture} />
      </mesh>
      {/* STATION - CENTER OF STATION */}
      <Cylinder args={[0.4, 0.4, 9.5, 36, 21]} rotation={[Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
        <meshStandardMaterial map={stationTexture} />
      </Cylinder>
      {/* STATION - RING TOP */}
      <Torus args={[3.05, 0.2, 7, 30]} rotation={[0, 0, 0]} position={[0, 0, -3.4]}>
        <meshStandardMaterial map={stationTexture} />
      </Torus>
      {/* STATION - TOP */}
      <Torus args={[0.2, 0.5, 26, 30]} position={[0, 0, -4.2]}>
        <meshStandardMaterial map={stationTexture} />
      </Torus>
      <Sphere args={[1.1, 36, 36]} position={[0, 0, -3.3]}>
        <meshStandardMaterial map={stationTexture} />
      </Sphere>
      {/* PATHWAYS - TOP */}
      <Cylinder
        args={[0.1, 0.1, 2.1, 36, 36]}
        rotation={[0, 0, Math.PI / 3]}
        position={[-1.8, 1, -3.4]}
      >
        <meshStandardMaterial map={stationTexture} />
      </Cylinder>
      <Cylinder
        args={[0.1, 0.1, 2.1, 36, 36]}
        rotation={[0, 0, Math.PI / -3]}
        position={[1.8, 1, -3.4]}
      >
        <meshStandardMaterial map={stationTexture} />
      </Cylinder>
      <Cylinder
        args={[0.1, 0.1, 2.1, 36, 36]}
        rotation={[0, 0, Math.PI / -3]}
        position={[-1.8, -1, -3.4]}
      >
        <meshStandardMaterial map={stationTexture} />
      </Cylinder>
      <Cylinder
        args={[0.1, 0.1, 2.1, 36, 36]}
        rotation={[0, 0, Math.PI / 3]}
        position={[1.8, -1, -3.4]}
      >
        <meshStandardMaterial map={stationTexture} />
      </Cylinder>

      {/* STATION - CENTER */}

      {/* STATION - CIRCLE INNER */}
      <Cylinder args={[0.6, 0.6, 1.2, 36, 21]} rotation={[Math.PI / 2, 0, 0]} position={[0, 0, -1]}>
        <meshStandardMaterial map={stationTexture} />
      </Cylinder>

      <Cylinder
        args={[1.6, 1.6, 0.5, 36, 36]}
        rotation={[Math.PI / 2, 0, 0]}
        position={[0, 0, -0.2]}
      >
        <meshStandardMaterial map={stationTexture} />
      </Cylinder>
      <Torus args={[1.8, 0.4, 7, 30]} rotation={[0, 0, 0]} position={[0, 0, -0.2]}>
        <meshStandardMaterial map={stationTexture} />
      </Torus>
      {/* PATHWAYS */}
      <Cylinder
        args={[0.1, 0.1, 4, 36, 36]}
        rotation={[0, 0, Math.PI / 6]}
        position={[-2, 3.4, -0.2]}
      >
        <meshStandardMaterial map={stationTexture} />
      </Cylinder>
      <Cylinder
        args={[0.1, 0.1, 4, 36, 36]}
        rotation={[0, 0, Math.PI / -6]}
        position={[2, 3.4, -0.2]}
      >
        <meshStandardMaterial map={stationTexture} />
      </Cylinder>
      <Cylinder
        args={[0.1, 0.1, 4, 36, 36]}
        rotation={[0, 0, Math.PI / -6]}
        position={[-2, -3.4, -0.2]}
      >
        <meshStandardMaterial map={stationTexture} />
      </Cylinder>
      <Cylinder
        args={[0.1, 0.1, 4, 36, 36]}
        rotation={[0, 0, Math.PI / 6]}
        position={[2, -3.4, -0.2]}
      >
        <meshStandardMaterial map={stationTexture} />
      </Cylinder>
      <Cylinder
        args={[0.1, 0.1, 4, 36, 36]}
        rotation={[0, 0, Math.PI / 2]}
        position={[3.5, 0, -0.2]}
      >
        <meshStandardMaterial map={stationTexture} />
      </Cylinder>
      <Cylinder
        args={[0.1, 0.1, 4, 36, 36]}
        rotation={[0, 0, Math.PI / 2]}
        position={[-3.5, 0, -0.2]}
      >
        <meshStandardMaterial map={stationTexture} />
      </Cylinder>

      {/* STATION - CIRCLE OUTER */}
      <Torus args={[6, 0.3, 5, 30, 20]} rotation={[0, 0, 0]} position={[0, 0, -0.2]}>
        <meshStandardMaterial map={stationTexture} />
      </Torus>

      {/* BOTTOM OF STATION */}
      <Cylinder
        args={[0.7, 0.7, 1.8, 36, 36]}
        rotation={[Math.PI / 2, 0, 0]}
        position={[0, 0, 3.6]}
      >
        <meshStandardMaterial map={stationTexture} />
      </Cylinder>
      <Cylinder args={[1, 1, 0.25, 36, 36]} rotation={[Math.PI / 2, 0, 0]} position={[0, 0, 3.6]}>
        <meshStandardMaterial map={stationTexture} />
      </Cylinder>
      <Cylinder
        args={[0.9, 0.9, 0.15, 36, 36]}
        rotation={[Math.PI / 2, 0, 0]}
        position={[0, 0, 4.1]}
      >
        <meshStandardMaterial map={stationTexture} />
      </Cylinder>
    </mesh>
  );
}

export default Station;