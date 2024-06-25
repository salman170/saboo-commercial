import { Canvas, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
// import {TextureLoader} from "three";
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
    <div className="h-screen bg-gray-800">
      <Canvas camera={{ position: [-50, 0, 25] }}>
        <ambientLight intensity={1} />
        <OrbitControls minDistance={10} maxDistance={40} />
        <Cube />
        {/* <directionalLight position={[25, 25, 25]} intensity={1} /> */}
        {/* <directionalLight position={[-50, 50, 25]} intensity={1} /> */}
        {/* <directionalLight position={[-75, -75, 25]} intensity={1} /> */}
        {/* <directionalLight position={[-75, -75, -50]} intensity={4} /> */}
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
  const texture_5 = useLoader(TextureLoader, leftImg);
  const texture_6 = useLoader(TextureLoader, rightImg);
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
