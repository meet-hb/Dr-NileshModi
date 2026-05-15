import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere, MeshDistortMaterial, Stars, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';
function SceneContent({ scrollY }) {
  const groupRef = useRef();
  const sphereRef = useRef();
  // High-tech grid points
  const points = useMemo(() => {
    const p = [];
    for (let i = 0; i < 100; i++) {
      p.push(new THREE.Vector3(
        (Math.random() - 0.5) * 30,
        (Math.random() - 0.5) * 30,
        (Math.random() - 0.5) * 30
      ));
    }
    return p;
  }, []);
  const lines = useMemo(() => {
    const l = [];
    for (let i = 0; i < 100; i++) {
      for (let j = i + 1; j < 100; j++) {
        if (points[i].distanceTo(points[j]) < 8) {
          l.push(points[i], points[j]);
        }
      }
    }
    return l;
  }, [points]);
  const lineGeometry = useMemo(() => {
    return new THREE.BufferGeometry().setFromPoints(lines);
  }, [lines]);
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.y = scrollY * 0.0004;
      groupRef.current.position.y = -scrollY * 0.002;
      groupRef.current.rotation.x = Math.sin(time * 0.2) * 0.05;
    }
    if (sphereRef.current) {
      sphereRef.current.distort = 0.3 + Math.sin(time * 0.5) * 0.1;
    }
  });
  return (
    <group ref={groupRef}>
      <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
      {/* Floating Modern Orb */}
      <Float speed={1.5} rotationIntensity={1} floatIntensity={1}>
        <mesh position={[8, 4, -10]}>
          <sphereGeometry args={[4, 64, 64]} />
          <MeshDistortMaterial
            ref={sphereRef}
            color="#FF9933"
            distort={0.4}
            speed={2}
            roughness={0.1}
            metalness={0.2}
            transparent
            opacity={0.05}
          />
        </mesh>
      </Float>
      {/* Connectivity Network */}
      <group>
        {points.map((p, i) => (
          <mesh key={i} position={p}>
            <sphereGeometry args={[0.04, 8, 8]} />
            <meshBasicMaterial color="#FF9933" transparent opacity={0.1} />
          </mesh>
        ))}
        <lineSegments geometry={lineGeometry}>
          <lineBasicMaterial color="#FF9933" transparent opacity={0.03} />
        </lineSegments>
      </group>
      <ambientLight intensity={1} />
      <directionalLight position={[10, 10, 10]} intensity={1} color="#ffffff" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#FF9933" />
    </group>
  );
}
export default function ThreeBackground({ scrollY }) {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[0, 0, 20]} fov={50} />
        <SceneContent scrollY={scrollY} />
        <fog attach="fog" args={['#fdfdfd', 10, 50]} />
      </Canvas>
      <div className="absolute inset-0 bg-gradient-to-tr from-white via-transparent to-teal/5 pointer-events-none" />
    </div>
  );
}
