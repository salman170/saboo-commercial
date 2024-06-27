import { Canvas, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import * as THREE from "three"; // Import THREE
import React from "react";
import frontImg from "../../assets/vehicles/super_carry/car/front.jpg";
import backImg from "../../assets/vehicles/super_carry/car/back.jpg";
import topImg from "../../assets/vehicles/super_carry/car/top.jpg";
import bottomImg from "../../assets/vehicles/super_carry/car/bottom.jpg";
import rightImg from "../../assets/vehicles/super_carry/car/right.jpg";
import leftImg from "../../assets/vehicles/super_carry/car/left.jpg";
import { OrbitControls } from "@react-three/drei";

const ThreeJs = () => {
  return (
    <div className="h-screen mx-auto ">
      <Canvas camera={{ position: [-50, 0, -0] }}>
        <ambientLight intensity={1} />
        <OrbitControls minDistance={5} maxDistance={20} />
        <hemisphereLight skyColor="white" groundColor="white" intensity={0.5} />
        <Cube />
      </Canvas>
    </div>
  );
};

export default ThreeJs;

function Cube() {
  const texture_1 = useLoader(TextureLoader, frontImg);
  const texture_2 = useLoader(TextureLoader, backImg);
  const texture_3 = useLoader(TextureLoader, topImg);
  const texture_4 = useLoader(TextureLoader, bottomImg);
  const texture_5 = useLoader(TextureLoader, rightImg);
  const texture_6 = useLoader(TextureLoader, leftImg);
  return (
    <mesh>
      <boxGeometry args={[100, 100, 100]} />
      <meshStandardMaterial
        map={texture_1}
        attach="material-0"
        side={THREE.BackSide}
      />
      <meshStandardMaterial
        map={texture_2}
        attach="material-1"
        side={THREE.BackSide}
      />
      <meshStandardMaterial
        map={texture_3}
        attach="material-2"
        side={THREE.BackSide}
      />
      <meshStandardMaterial
        map={texture_4}
        attach="material-3"
        side={THREE.BackSide}
      />
      <meshStandardMaterial
        map={texture_5}
        attach="material-4"
        side={THREE.BackSide}
      />
      <meshStandardMaterial
        map={texture_6}
        attach="material-5"
        side={THREE.BackSide}
      />
    </mesh>
  );
}
