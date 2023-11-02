import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import Experience from "./Experience"

function App() {
  return (
    <Canvas camera={{
      position: [3, 3, 3]
    }}>
      <OrbitControls />
      <Experience />
    </Canvas>
  )
}

export default App
