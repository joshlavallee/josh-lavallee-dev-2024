import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <Canvas>
        <Experience />
    </Canvas>
)
