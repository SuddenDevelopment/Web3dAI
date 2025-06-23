import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, MeshWobbleMaterial, MeshDistortMaterial, MeshReflectorMaterial, Sparkles, ContactShadows } from '@react-three/drei';
import { ShaderSphere } from '../components/ShaderSphere';
import { Link } from 'react-router-dom';

export default function ShadersGallery() {
  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
      <Canvas style={{ width: '100%', height: '100%', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
        <PerspectiveCamera makeDefault position={[0, 0, 15]} />
        <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
        
        {/* Lighting */}
        <ambientLight intensity={0.4}/>
        <pointLight intensity={1} position={[10, 10, 10]} />
        <pointLight intensity={1} position={[-10, -10, -10]} color="#ff6b6b" />
        
        {/* First row */}
        <ShaderSphere position={[-6, 3, 0]} name="Standard">
          <meshStandardMaterial color="#ff6b6b" roughness={0.2} metalness={0.8} />
        </ShaderSphere>
        
        <ShaderSphere position={[-2, 3, 0]} name="Physical">
          <meshPhysicalMaterial color="#4ecdc4" roughness={0} metalness={1} clearcoat={1} />
        </ShaderSphere>
        
        <ShaderSphere position={[2, 3, 0]} name="Toon">
          <meshToonMaterial color="#45b7d1" />
        </ShaderSphere>
        
        <ShaderSphere position={[6, 3, 0]} name="Lambert">
          <meshLambertMaterial color="#96ceb4" />
        </ShaderSphere>
        
        {/* Second row - Drei materials */}
        <ShaderSphere position={[-6, 0, 0]} name="Wobble">
          <MeshWobbleMaterial color="#ffeaa7" speed={2} factor={0.2} />
        </ShaderSphere>
        
        <ShaderSphere position={[-2, 0, 0]} name="Distort">
          <MeshDistortMaterial color="#fd79a8" speed={5} distort={0.3} radius={1} />
        </ShaderSphere>
        
        <ShaderSphere position={[2, 0, 0]} name="Matcap">
          <meshMatcapMaterial color="#e17055" />
        </ShaderSphere>
        
        <ShaderSphere position={[6, 0, 0]} name="Normal">
          <meshNormalMaterial />
        </ShaderSphere>
        
        {/* Third row - Special effects */}
        <ShaderSphere position={[-6, -3, 0]} name="Basic">
          <meshBasicMaterial color="#a29bfe" />
        </ShaderSphere>
        
        <ShaderSphere position={[-2, -3, 0]} name="Depth">
          <meshDepthMaterial />
        </ShaderSphere>
        
        <ShaderSphere position={[2, -3, 0]} name="Wireframe">
          <meshStandardMaterial color="#00b894" wireframe />
        </ShaderSphere>
        
        <ShaderSphere position={[6, -3, 0]} name="Transparent">
          <meshStandardMaterial color="#74b9ff" transparent opacity={0.6} />
        </ShaderSphere>
        
        {/* Ground with reflective material */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -6, 0]}>
          <planeGeometry args={[50, 50]} />
          <MeshReflectorMaterial
            blur={[300, 100]}
            resolution={2048}
            mixBlur={1}
            mixStrength={40}
            roughness={1}
            depthScale={1.2}
            minDepthThreshold={0.4}
            maxDepthThreshold={1.4}
            color="#202020"
            metalness={0.5}
          />
        </mesh>
        
        <ContactShadows position={[0, -5.9, 0]} opacity={0.4} scale={50} blur={1} far={10} />
        <Sparkles count={100} scale={20} size={3} speed={0.2} />
      </Canvas>
      
      {/* Navigation */}
      <div style={{
        position: 'absolute',
        top: '20px',
        left: '20px',
        zIndex: 100,
      }}>
        <Link 
          to="/" 
          style={{
            color: 'white',
            textDecoration: 'none',
            background: 'rgba(0,0,0,0.7)',
            padding: '10px 20px',
            borderRadius: '5px',
            fontSize: '16px',
            fontWeight: 'bold'
          }}
        >
          ← Back to Home
        </Link>
      </div>
      
      {/* Title overlay */}
      <div style={{
        position: 'absolute',
        top: '20px',
        right: '20px',
        color: 'white',
        fontSize: '32px',
        fontWeight: 'bold',
        textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
        zIndex: 100,
      }}>
        Shaders Gallery
      </div>
      
      {/* Instructions */}
      <div style={{
        position: 'absolute',
        bottom: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        color: 'white',
        fontSize: '16px',
        textAlign: 'center',
        background: 'rgba(0,0,0,0.7)',
        padding: '10px 20px',
        borderRadius: '5px',
        zIndex: 100,
      }}>
        Click and drag to orbit • Scroll to zoom • Explore different materials and shaders
      </div>
    </div>
  );
}