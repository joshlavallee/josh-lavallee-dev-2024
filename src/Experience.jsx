import { useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { CustomObject } from "./components";

export default function Experience() {
  const groupRef = useRef();
  const cubeRef = useRef();
  const sphereRef = useRef();

  useFrame((state, delta) => {
    cubeRef.current.rotation.y += delta;
    sphereRef.current.rotation.y += delta;

    // const angle = state.clock.elapsedTime;
    // state.camera.position.x = Math.sin(angle) * 6;
    // state.camera.position.z = Math.cos(angle) * 6;
    // state.camera.lookAt(0, 0, 0);
  });

  return (
    <>
      <OrbitControls />

      {/* <directionalLight position={[1, 2, 3]} intensity={3.5} /> */}

      <CustomObject />
      <group ref={groupRef}>
        <mesh ref={sphereRef} position-x={-3}>
          <sphereGeometry />
          <meshStandardMaterial color="orange" />
        </mesh>
        <mesh
          ref={cubeRef}
          scale={1.5}
          position-x={3}
          rotation-y={Math.PI * 0.25}
        >
          <boxGeometry />
          <meshStandardMaterial color="mediumpurple" />
        </mesh>
      </group>
      <mesh scale={10} position-y={-1} rotation-x={-Math.PI * 0.5}>
        <planeGeometry />
        <meshStandardMaterial color="greenyellow" side={THREE.DoubleSide} />
      </mesh>
    </>
  );
}
