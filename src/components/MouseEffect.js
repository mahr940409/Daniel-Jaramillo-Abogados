import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function MouseTrail({ mousePosition }) {
  const mesh = useRef();
  const geometryRef = useRef();
  
  useEffect(() => {
    // Crear puntos para el trail
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(50 * 3);
    const colors = new Float32Array(50 * 3);
    
    for (let i = 0; i < 50; i++) {
      positions[i * 3] = 0;
      positions[i * 3 + 1] = 0;
      positions[i * 3 + 2] = 0;
      
      const color = new THREE.Color();
      color.setHSL(0.1, 1, 0.5 + i * 0.01); // Dorado
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }
    
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    
    geometryRef.current = geometry;
  }, []);

  useFrame((state) => {
    if (geometryRef.current && geometryRef.current.attributes && geometryRef.current.attributes.position && mousePosition) {
      const positions = geometryRef.current.attributes.position.array;
      
      // Mover puntos hacia la posición del mouse
      for (let i = positions.length - 3; i >= 3; i -= 3) {
        positions[i] = positions[i - 3];
        positions[i + 1] = positions[i - 2];
        positions[i + 2] = positions[i - 1];
      }
      
      // Posición del primer punto
      positions[0] = (mousePosition.x / window.innerWidth) * 20 - 10;
      positions[1] = -(mousePosition.y / window.innerHeight) * 20 + 10;
      positions[2] = 0;
      
      geometryRef.current.attributes.position.needsUpdate = true;
    }
  });

  return (
    <points ref={mesh} geometry={geometryRef.current}>
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

function MouseEffect({ children }) {
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div style={{ position: 'relative' }}>
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 1000,
        pointerEvents: 'none'
      }}>
        <Canvas
          camera={{ position: [0, 0, 10], fov: 75 }}
          style={{ background: 'transparent' }}
        >
          <ambientLight intensity={0.1} />
          <MouseTrail mousePosition={mousePosition} />
        </Canvas>
      </div>
      {children}
    </div>
  );
}

export default MouseEffect; 