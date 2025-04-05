"use client";

import React, { useRef, useState, useEffect } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Center, Environment } from "@react-three/drei";

const MODEL_PATH = "/models/tattoo-machine.gltf";

function MachineModel() {
  const group = useRef<THREE.Group>(null);
  const { scene } = useGLTF(MODEL_PATH);

  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const vec = useRef(new THREE.Vector3()).current;

  useFrame(({ camera }) => {
    if (!group.current) return;

    vec.set(mouse.x, mouse.y, 0.5);
    vec.unproject(camera);
    group.current.lookAt(vec);
    group.current.rotateY(-Math.PI / 2);
    group.current.rotation.x += 0.5;
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const factor = 200;
      const x = ((e.clientX / window.innerWidth) * 2 - 1) * factor;
      const y = -((e.clientY / window.innerHeight) * 2 - 1) * factor;
      setMouse({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <group ref={group} scale={50}>
      <Center>
        <primitive object={scene} />
      </Center>
    </group>
  );
}

export default function TattooMachineCanvas() {
  return (
    <div style={{ width: "100%", height: "300px", position: "relative" }}>
      <Canvas
        camera={{ position: [0, 0, 10], fov: 50 }}
        onCreated={({ gl }) => {
          gl.toneMapping = THREE.LinearToneMapping;
          gl.toneMappingExposure = 0.5; // odpowiada -1.4 w viewerze
        }}
      >
        {/* Światła identyczne jak w glTF Viewerze */}
        <ambientLight intensity={0.3} color="#ffffff" />
        <directionalLight position={[5, 5, 5]} intensity={2.5} color="#ffffff" />

        {/* Refleksy środowiskowe, ale bez zmiany tła */}
        <Environment preset="studio" />

        <MachineModel />
      </Canvas>
    </div>
  );
}
