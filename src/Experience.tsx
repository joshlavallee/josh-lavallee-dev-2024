import * as three from "three";
import { useState, useRef } from "react"
import { useFrame } from "@react-three/fiber";

function Experience() {
    // This reference gives us direct access to the THREE.Mesh object
    const cube = useRef<three.Mesh>(null);

    // Hold state for hovered and clicked events
    const [hovered, hover] = useState(false)
    const [clicked, click] = useState(false)

    useFrame(() => {
        cube.current!.rotation.x += 0.01;
        cube.current!.rotation.y += 0.01;
    });

    return (
        <>
        <mesh
            // rotation={[0,0,0]}
            scale={.75}
            position={[-3, 0, 0]}
        >
            <sphereGeometry />
            <meshBasicMaterial color={"purple"}/>
        </mesh>
            
        <mesh
            ref={cube}
            scale={clicked ? 2 : 1}
            onClick={() => click(!clicked)}
            onPointerOver={(event) => (event.stopPropagation(), hover(true))}
            onPointerOut={() => hover(false)}
        >
            <boxGeometry />
            {hovered ? <meshBasicMaterial color={"purple"}/> : <meshBasicMaterial color={"yellow"} />}
        </mesh>
        </>
    );
}

export default Experience