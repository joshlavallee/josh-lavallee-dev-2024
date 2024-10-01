import { useRef } from "react";
import { useFrame } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"

export default function Experience() {
    const groupRef = useRef();
    const cubeRef = useRef();
    const sphereRef = useRef();

    useFrame((state, delta) => {
        groupRef.current.rotation.y += delta;
        cubeRef.current.rotation.y += delta;
        sphereRef.current.rotation.y += delta;
    });

    return (
        <>
            <OrbitControls />

            <directionalLight position={[1, 2, 3]} intensity={4.5} />

            <group ref={groupRef}>
                <mesh ref={sphereRef} position-x={-2} >
                    <sphereGeometry />
                    <meshStandardMaterial color="orange" />
                </mesh>
                <mesh ref={cubeRef} scale={1.5} position-x={2} rotation-y={Math.PI * 0.25} >
                    <boxGeometry />
                    <meshStandardMaterial color="mediumpurple" />
                </mesh>
            </group>
            <mesh scale={10} position-y={-1} rotation-x={-Math.PI * 0.5}>
                <planeGeometry />
                <meshStandardMaterial color="greenyellow" />
            </mesh>
        </>
    );
}