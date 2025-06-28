"use client";


import { Canvas } from "@react-three/fiber";
import { 
  OrbitControls, 
  PerspectiveCamera, 
  BakeShadows
} from "@react-three/drei";
import { Suspense} from "react";
import { Robot } from "./Robot";
import { useMediaQuery } from "react-responsive";

interface HeroExperienceProps {
  isMobile: boolean;
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function HeroExperience({isMobile}: HeroExperienceProps) {

  const isMobileQuery = useMediaQuery({ maxWidth: 835 });

  return (
    <div className="w-full h-full">
      <Canvas 
        shadows
        camera={{ position: [0, 0, 10], fov: 45 }}
        className="w-full h-full"
      >
        <Suspense fallback={null}>
          {/* Base lighting */}
          <ambientLight intensity={0.7} />
          <directionalLight 
            intensity={1.5} 
            position={[5, 5, 5]} 
            castShadow
            shadow-mapSize={[1024, 1024]} 
          />
          
          
          {/* Camera setup */}
          <PerspectiveCamera 
            makeDefault 
            position={[0, 0, 8]}
            fov={45}
          />
          
          {/* 3D Model */}
          <Robot
            rotation={[0.2, Math.PI / 4, 0.1]}
            scale={isMobileQuery ? 0.9 : 0.9}
            position={isMobileQuery ? [0, -2.2, 0] : [0, -1.2, 0]}
          />
          
          {/* Controls */}
          <OrbitControls
            enableZoom={isMobileQuery ? true : false}
            minPolarAngle={Math.PI / 4}
            maxPolarAngle={Math.PI / 2}
            autoRotate
            autoRotateSpeed={isMobileQuery ? 3 : 2.8}
          />
          
          <BakeShadows />
        </Suspense>
      </Canvas>
    </div>
  );
}