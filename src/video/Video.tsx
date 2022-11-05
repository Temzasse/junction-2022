import { Composition } from 'remotion';
import { HelloWorld } from './HelloWorld';

export const RemotionVideo: React.FC = () => {
  return (
    <>
      <Composition
        id="Scene"
        component={HelloWorld}
        durationInFrames={300}
        fps={30}
        width={1280}
        height={720}
        defaultProps={{
          titleColor: 'red',
          titleText: 'Hello World',
        }}
      />
    </>
  );
};
