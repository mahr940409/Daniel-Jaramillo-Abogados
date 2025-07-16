import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

function ScrollGeometry({ scrollY }) {
  const mesh = useRef();
  
  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.x = scrollY * 0.001;
      mesh.current.rotation.y = scrollY * 0.0005;
      mesh.current.position.y = Math.sin(scrollY * 0.01) * 2;
    }
  });

  return (
    <mesh ref={mesh} position={[0, 0, -20]}>
      <torusGeometry args={[8, 3, 16, 100]} />
      <meshBasicMaterial color="#d4af37" wireframe transparent opacity={0.4} />
    </mesh>
  );
}

function ScrollEffect({ children, className = "" }) {
  const containerRef = useRef();
  const [scrollY, setScrollY] = React.useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={containerRef} className={`scroll-effect ${className}`} style={{ position: 'relative' }}>
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
          camera={{ position: [0, 0, 30], fov: 75 }}
          style={{ background: 'transparent' }}
        >
          <ambientLight intensity={0.2} />
          <pointLight position={[10, 10, 10]} intensity={0.5} color="#d4af37" />
          <ScrollGeometry scrollY={scrollY} />
        </Canvas>
      </div>
      <div style={{ position: 'relative', zIndex: 2 }}>
        {children}
      </div>
    </div>
  );
}

export default ScrollEffect; 