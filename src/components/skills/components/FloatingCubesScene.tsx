import { Canvas, useFrame } from "@react-three/fiber";
import { Euler, Mesh } from "three";
import { useMemo, useRef, useState } from "react";
import type { CubeData } from "@/types/CubeData";
import { cubesData } from "@/components/skills/data/cubesData";
import { useSpring, a } from "@react-spring/three";

const Cube: React.FC<CubeData> = ({ position, size, speed, horizontalDir }) => {
  const ref = useRef<Mesh>(null!);

  const initialRotation = useMemo(
    () =>
      new Euler(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      ),
    []
  );
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  const applyEffect = hovered || clicked;

  const { scale } = useSpring({
    scale: applyEffect ? 1.2 : 1,
    config: { tension: 300, friction: 15 },
  });

  const currentPosition = useRef({ x: position[0], y: position[1] });
  useFrame((_, delta) => {
    ref.current.rotation.x += delta * 0.3 * speed;
    ref.current.rotation.y += delta * 0.5 * speed;

    currentPosition.current.x += delta * 0.1 * speed * horizontalDir;

    if (currentPosition.current.x > 6) currentPosition.current.x = -5;
    if (currentPosition.current.x < -6) currentPosition.current.x = 5;

    ref.current.position.x = currentPosition.current.x;
  });

  return (
    <a.mesh
      ref={ref}
      position={position}
      rotation={initialRotation}
      scale={scale}
      onPointerOver={(_) => setHovered(true)}
      onPointerOut={(_) => setHovered(false)}
      onClick={() => setClicked((c) => !c)}
    >
      <boxGeometry args={[size, size, size]} />
      <meshStandardMaterial
        color="#f9f9f9"
        transparent
        opacity={applyEffect ? 0.5 : 0.1}
      />
    </a.mesh>
  );
};

const FloatingCubesScene = () => {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 5, 2]} />
      {cubesData.map((cube) => (
        <Cube
          key={`${cube.position[0]}-${cube.position[1]}-${cube.position[2]}`}
          {...cube}
        />
      ))}
    </Canvas>
  );
};
export default FloatingCubesScene;
