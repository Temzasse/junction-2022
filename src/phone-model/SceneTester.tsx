import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { AdaptiveDpr, AdaptiveEvents, Environment } from '@react-three/drei';
import { OrbitControls } from '@react-three/drei';

import PhoneModel from './PhoneModel';
import { styled } from '../styled';

export default function PhoneModelScene() {
  return (
    <Wrapper>
      <Phone>
        <Canvas camera={{ fov: 14 }}>
          <ambientLight intensity={1} />
          <directionalLight intensity={0.4} />
          <Suspense fallback={null}>
            <PhoneModel />
          </Suspense>
          <Environment preset="night" />
          <AdaptiveDpr pixelated />
          <AdaptiveEvents />
          <OrbitControls enableZoom={false} />
        </Canvas>
      </Phone>
    </Wrapper>
  );
}

const Wrapper = styled('div', {
  width: '100vw',
  height: '100vh',
  position: 'relative',
  zIndex: 1,
  backgroundColor: '#000',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

const Phone = styled('div', {
  width: '100%',
  height: '70%',
  position: 'relative',
  cursor: 'grab',
});
