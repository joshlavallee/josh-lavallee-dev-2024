import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"

export default function Experience() {
    return (
        <Canvas>
            <OrbitControls />
            <mesh>
                <sphereGeometry args={[1.5, 32, 32]} />
                <meshBasicMaterial wireframe />
            </mesh>
        </Canvas>
    );
}