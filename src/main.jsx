import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience'
import { CAMERA_SETTINGS, GL_SETTINGS, PIXEL_RATIO } from './settings'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <Canvas gl={GL_SETTINGS} camera={CAMERA_SETTINGS} drp={PIXEL_RATIO} >
        <Experience />
    </Canvas>
)
