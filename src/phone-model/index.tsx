import { Player } from '@remotion/player';
import * as constants from './constants';
import Scene from './Scene';

export default function Video() {
  const width = constants.VIDEO_WIDTH;
  const height = width * constants.ASPECT_RATIO;

  return (
    <Player
      loop
      autoPlay
      component={Scene}
      durationInFrames={constants.DURATION_IN_FRAMERS}
      fps={constants.FPS}
      compositionWidth={width}
      compositionHeight={height}
    />
  );
}
