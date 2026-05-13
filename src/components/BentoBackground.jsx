import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Text, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

function AcademicParticles() {
  const groupRef = useRef();
  const icons = ['🎓', '📚', '💡', '🔬', '💻', '📝', '🏛️'];
  
  const particleData = useMemo(() => {
    return Array.from({ length: 40 }, () => ({
      position: [
        (Math.random() - 0.5) * 30,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 10
      ],
      icon: icons[Math.floor(Math.random() * icons.length)],
      scale: Math.random() * 0.5 + 0.3,
      speed: Math.random() * 0.2 + 0.1
    }));
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.y = time * 0.05;
      groupRef.current.children.forEach((child, i) => {
        child.position.y += Math.sin(time + i) * 0.005;
      });
    }
  });

  return (
    <group ref={groupRef}>
      {particleData.map((data, i) => (
        <group key={i} position={data.position}>
          <Float speed={2} rotationIntensity={1} floatIntensity={1}>
            <Text
              fontSize={data.scale}
              color="#FF9933"
              opacity={0.3}
              transparent
              font="/fonts/Montserrat-Bold.ttf" // Fallback to default if not found
            >
              {data.icon}
            </Text>
          </Float>
        </group>
      ))}
    </group>
  );
}

export default function BentoBackground() {
  return (
    <div 
      className="absolute inset-0 z-0 pointer-events-none overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #002e58 0%, #002e58 40%, #ffffff 100%)'
      }}
    >
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 15]} fov={50} />
        <AcademicParticles />
        <ambientLight intensity={1} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#FF9933" />
      </Canvas>
      {/* Soft Overlay to blend the gradient better */}
      <div className="absolute inset-0 bg-navy/20 mix-blend-multiply pointer-events-none"></div>
    </div>
  );
}
