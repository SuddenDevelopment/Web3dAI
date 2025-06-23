import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

export function Model() {
  const meshRef = useRef<Mesh>(null);

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.5;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, -5, 0]}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="#ff6b6b" />
    </mesh>
  );
}