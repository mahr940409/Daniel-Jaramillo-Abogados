import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function ParticleSystem({ count = 50, color = "#d4af37" }) {
  const particles = useRef();

  useEffect(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
      
      const hex = new THREE.Color(color);
      colors[i * 3] = hex.r;
      colors[i * 3 + 1] = hex.g;
      colors[i * 3 + 2] = hex.b;
    }
    
    particles.current.geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particles.current.geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  }, [count, color]);

  useFrame((state) => {
    if (particles.current) {
      particles.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      particles.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });

  return (
    <points ref={particles}>
      <bufferGeometry />
      <pointsMaterial
        size={0.1}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
      />
    </points>
  );
}

function ParticleEffect({ children, className = "" }) {
  return (
    <div className={`particle-effect ${className}`} style={{ position: 'relative' }}>
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 1,
        pointerEvents: 'none'
      }}>
        <Canvas
          camera={{ position: [0, 0, 5], fov: 75 }}
          style={{ background: 'transparent' }}
        >
          <ambientLight intensity={0.1} />
          <ParticleSystem count={30} color="#d4af37" />
        </Canvas>
      </div>
      <div style={{ position: 'relative', zIndex: 2 }}>
        {children}
      </div>
    </div>
  );
}

export default ParticleEffect; 