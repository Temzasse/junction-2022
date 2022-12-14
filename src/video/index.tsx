import { Player } from '@remotion/player';
import { Scene } from './Scene';
import videoSrc from './assets/phone.mp4';

const aspectRatio = 9 / 16;

export default function Video() {
  const width = 1280;
  const height = width * aspectRatio;

  return (
    <Player
      loop
      autoPlay
      component={Scene}
      durationInFrames={150}
      fps={30}
      compositionWidth={width}
      compositionHeight={height}
      inputProps={{
        baseScale: 1,
        videoSrc,
      }}
    />
  );
}
