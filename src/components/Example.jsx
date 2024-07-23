import { OrbitControls } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

export const Example = () => {
  const mesh = useRef();

  useFrame(() => {
    mesh.current.rotation.x += 0.005;
  });
  return (
    <>
      <OrbitControls />
      <mesh ref={mesh}>
        <boxGeometry />
        <meshNormalMaterial />
      </mesh>
    </>
  );
};
