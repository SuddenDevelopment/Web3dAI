import React from 'react';
import ReactDOM from 'react-dom/client';
import { Canvas } from '@react-three/fiber';
import { Model } from './model';
import './index.css';
import { OrbitControls, Float, PerspectiveCamera, Text3D, Center, MeshReflectorMaterial, Cloud, Stars } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import Overlay from './Overlay';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
      <Canvas style={{ width: '100%', height: '100%', background: 'black' }}>
        <Center position={[0, 0, 0]} scale={4}>
          <Text3D font="roboto.json" position={[0, 2.5, 0]} >
            GETTING STARTED
            <meshStandardMaterial color="#00ffcc" roughness={0} metalness={0.5} />
          </Text3D>
          <Text3D font="roboto.json" position={[1, -2.5, 0]} >
            WITH WEB3D
            <meshStandardMaterial color="#00ffcc" roughness={0} metalness={0.5} />
          </Text3D>
        </Center>
        <PerspectiveCamera makeDefault position={[0, 2, 50]} />
        <OrbitControls />
        <ambientLight intensity={0.5}/>
        <pointLight intensity={10000} position={[20, 20, -20]} castShadow />
        <Cloud opacity={0.25} speed={0.4} scale={20} segments={20} color={'#666666'} position={[0, 0, -20]} />
        <Stars radius={100} depth={10} count={5000} factor={2} saturation={0} fade />
        <Model />
        <EffectComposer>
          <Bloom luminanceThreshold={0.1} luminanceSmoothing={0.3} height={600} />
        </EffectComposer>
      </Canvas>
      <Overlay />
    </div>
  </React.StrictMode>
);
