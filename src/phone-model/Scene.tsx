import { Suspense } from 'react';
import { ThreeCanvas } from '@remotion/three';
import { AbsoluteFill, useVideoConfig } from 'remotion';
import { AdaptiveDpr, AdaptiveEvents, Environment } from '@react-three/drei';

import PhoneModel from './PhoneModel';

export default function Scene() {
  const { width, height } = useVideoConfig();

  return (
    <AbsoluteFill style={container}>
      <ThreeCanvas linear width={width} height={height}>
        <ambientLight intensity={1} />
        <directionalLight intensity={0.4} />
        <Suspense fallback={null}>
          <PhoneModel />
        </Suspense>
        <Environment preset="night" />
        <AdaptiveDpr pixelated />
        <AdaptiveEvents />
      </ThreeCanvas>
    </AbsoluteFill>
  );
}

const container: React.CSSProperties = {
  backgroundColor: '#000',
};
