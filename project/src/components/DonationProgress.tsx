import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import * as THREE from 'three';

interface DonationProgressProps {
  currentAmount: number;
  targetAmount: number;
}

export function DonationProgress({ currentAmount, targetAmount }: DonationProgressProps) {
  const progressBar = useRef<THREE.Mesh>(null);
  const progress = currentAmount / targetAmount;

  useFrame((state) => {
    if (progressBar.current) {
      // Smooth progress animation
      progressBar.current.scale.x = THREE.MathUtils.lerp(
        progressBar.current.scale.x,
        progress,
        0.1
      );
      
      // Simple wobble animation
      const time = state.clock.elapsedTime;
      progressBar.current.position.y = Math.sin(time * 2) * 0.02;
      progressBar.current.rotation.z = Math.sin(time * 1.5) * 0.01;
    }
  });

  return (
    <group position={[0, 0, 0]}>
      {/* Doodle frame */}
      <mesh position={[0, 0, -0.1]}>
        <boxGeometry args={[5.4, 1.1, 0.1]} />
        <meshStandardMaterial 
          color="#2d3748"
          wireframe={true}
        />
      </mesh>

      {/* Background */}
      <mesh position={[0, 0, -0.05]}>
        <boxGeometry args={[5, 0.7, 0.1]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>

      {/* Progress bar */}
      <mesh 
        ref={progressBar} 
        position={[-2.5 + (2.5 * progress), 0, 0]} 
        scale={[progress, 1, 1]}
      >
        <boxGeometry args={[5, 0.5, 0.2]} />
        <meshStandardMaterial 
          color="#ff6b6b"
          roughness={0.8}
        />
      </mesh>

      {/* Amount text */}
      <Text
        position={[0, 0, 0.1]}
        fontSize={0.4}
        color="#2d3748"
        font="/fonts/IndieFlower-Regular.ttf"
        anchorX="center"
        anchorY="middle"
      >
        {`RM${currentAmount.toLocaleString()} / RM${targetAmount.toLocaleString()}`}
      </Text>

      {/* Decorative stars */}
      <Text
        position={[-2.8, 0, 0.1]}
        fontSize={0.4}
        color="#ffd700"
        anchorX="center"
        anchorY="middle"
      >
        ★
      </Text>
      <Text
        position={[2.8, 0, 0.1]}
        fontSize={0.4}
        color="#ffd700"
        anchorX="center"
        anchorY="middle"
      >
        ★
      </Text>
    </group>
  );
}