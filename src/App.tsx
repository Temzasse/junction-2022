import CommandPrompt from './command-prompt';
// Import PhoneModelScene from './phone-model';
import { styled } from './styled';
import Video from './phone-model';

export default function App() {
  return (
    <>
      <VideoWrapper>
        <Video />
      </VideoWrapper>
      {/* <PhoneModelScene /> */}
      <CommandPrompt />
    </>
  );
}

// ⌘ + K

const VideoWrapper = styled('div', {
  width: '100vw',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});
