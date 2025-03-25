"use client";

import React, { useRef, useState, useEffect } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Center } from "@react-three/drei";

const MODEL_PATH = "/models/tattoo-machine.gltf";

function MachineModel() {
  const group = useRef<THREE.Group>(null);
  const { scene } = useGLTF(MODEL_PATH);

  // Przechowujemy pozycję myszy w zakresie -1..1
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  // Jeden wektor roboczy, by nie tworzyć nowego w każdej klatce
  const vec = useRef(new THREE.Vector3()).current;

  useFrame(({ camera }) => {
    if (!group.current) return;

    // 1) Oblicz współrzędne 3D punktu, w który chcemy "patrzeć"
    //    Z = 0.5 w NDC oznacza, że punkt jest przed kamerą (z>0),
    //    co sprawia, że lookAt będzie działał w przedniej połowie sceny.
    vec.set(mouse.x, mouse.y, 0.5);
    vec.unproject(camera);

    // 2) Ustaw obiekt tak, by oś +Z wskazywała w "vec"
    group.current.lookAt(vec);

    // 3) Obiekt stoi tak, że +Z jest frontem => chcemy +X jako front.
    //    Rotacja o -90° (czyli -π/2) w osi Y przenosi front z +Z na +X.
    group.current.rotateY(-Math.PI /2 );

    // 4) Dodaj stałe pochylenie w osi X, np. 0.7 rad (~40 stopni)
    //    Dzięki temu obiekt jest pochylony do przodu.
    group.current.rotation.x += 0.5;
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
        const factor = 200;
      const x = ((e.clientX / window.innerWidth) * 2 - 1)* factor;
      const y = -((e.clientY / window.innerHeight) * 2 - 1)* factor;
      setMouse({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <group ref={group} scale={50}>
      {/* <Center> centrowanie pivotu modelu */}
      <Center>
        <primitive object={scene} />
      </Center>
    </group>
  );
}

export default function TattooMachineCanvas() {
  return (
    <div style={{ width: "100%", height: "300px", position: "relative" }}>
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} />
        <MachineModel />
      </Canvas>
    </div>
  );
}
