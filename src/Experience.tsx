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
        <mesh
            ref={cube}
            scale={clicked ? 1.5 : 1}
            onClick={() => click(!clicked)}
            onPointerOver={(event) => (event.stopPropagation(), hover(true))}
            onPointerOut={() => hover(false)}
        >
            <boxGeometry args={[1, 1, 1]} />
            {hovered ? <meshNormalMaterial /> : <meshStandardMaterial color="hotpink" />}
        </mesh>
    );
}

export default Experience