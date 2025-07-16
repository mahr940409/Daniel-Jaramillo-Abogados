import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';

function AnimatedParticles() {
  const mesh = useRef();
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < 1000; i++) {
      const time = Math.random() * 100;
      const factor = Math.random() * 20 + 10;
      const speed = Math.random() * 0.01;
      const x = Math.random() * 2000 - 1000;
      const y = Math.random() * 2000 - 1000;
      const z = Math.random() * 2000 - 1000;
      temp.push({ time, factor, speed, x, y, z });
    }
    return temp;
  }, []);

  useFrame((state) => {
    particles.forEach((particle, i) => {
      particle.time += particle.speed;
      particle.x += Math.sin(particle.time) * 0.1;
      particle.y += Math.cos(particle.time) * 0.1;
      particle.z += Math.sin(particle.time) * 0.1;
    });
  });

  return (
    <group ref={mesh}>
      {particles.map((particle, i) => (
        <mesh key={i} position={[particle.x, particle.y, particle.z]}>
          <sphereGeometry args={[0.5, 8, 8]} />
          <meshBasicMaterial color="#d4af37" transparent opacity={0.6} />
        </mesh>
      ))}
    </group>
  );
}

function FloatingGeometry() {
  const mesh = useRef();
  
  useFrame((state) => {
    mesh.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
    mesh.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.3;
    mesh.current.position.y = Math.sin(state.clock.elapsedTime * 0.2) * 2;
  });

  return (
    <mesh ref={mesh} position={[0, 0, -50]}>
      <octahedronGeometry args={[10, 0]} />
      <meshBasicMaterial color="#dc143c" wireframe transparent opacity={0.3} />
    </mesh>
  );
}

function Background3D({ controlsEnabled = true }) {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: -1,
      background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%)'
    }}>
      <Canvas
        camera={{ position: [0, 0, 100], fov: 75 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.1} />
        <pointLight position={[10, 10, 10]} intensity={0.5} color="#d4af37" />
        <pointLight position={[-10, -10, -10]} intensity={0.3} color="#dc143c" />
        
        <Stars 
          radius={100} 
          depth={50} 
          count={5000} 
          factor={4} 
          saturation={0} 
          fade 
          speed={1}
        />
        
        <AnimatedParticles />
        <FloatingGeometry />
        
        {/* Controles 3D deshabilitados temporalmente para permitir scroll */}
        {/* <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          enableRotate={false}
          autoRotate
          autoRotateSpeed={0.5}
          enableDamping={false}
        /> */}
      </Canvas>
    </div>
  );
}

export default Background3D; 