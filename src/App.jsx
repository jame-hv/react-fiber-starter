import { Canvas } from '@react-three/fiber';
import { Example } from './components/Example';

function App() {
  return (
    <Canvas shadows camera={{ position: [3, 3, 3], fov: 30 }}>
      <color attach="background" args={['#ececec']} />
      <Example />
    </Canvas>
  );
}

export default App;
