"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float, Icosahedron } from "@react-three/drei";

type Props = {
  lightPosition?: [number, number, number];
  color?: string;
  className?: string;
};

function FloatingMesh({
  lightPosition = [5, 5, 5],
  color = "hotpink",
  className = "w-full h-96"
}: Props) {
  return (
    <Canvas className={className}>
      <ambientLight intensity={0.8} />
      <directionalLight position={lightPosition} />
      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <Icosahedron args={[1.5, 0]}>
          <meshStandardMaterial color={color} />
        </Icosahedron>
      </Float>
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}

export default FloatingMesh;
