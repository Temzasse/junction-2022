import * as DialogPrimitive from '@radix-ui/react-dialog';
import { styled, keyframes } from '../styled';
import { useEffect, useState } from 'react';

export default function CommandPrompt() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');

  useEffect(() => {
    const down = (e: any) => {
      if (e.key === 'k' && e.metaKey) {
        setOpen((o) => !o);
      } else if (e.key === 'Escape') {
        setOpen(false);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  return (
    <DialogPrimitive.Root open={open}>
      <DialogPrimitive.Portal>
        <Overlay />
        <Content>
          <CommandPromptForm>
            <CommandPromptInput
              placeholder="What would you like to generate?"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </CommandPromptForm>
        </Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}

const overlayShow = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
});

const contentShow = keyframes({
  '0%': { opacity: 0, transform: 'translate(-50%, -48%) scale(.96)' },
  '100%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
});

const CommandPromptForm = styled('form', {});

const CommandPromptInput = styled('input', {
  backgroundColor: '$elevated',
  border: 'none',
  width: '100%',
  padding: 16,
  outline: 'none',
  color: '$textMuted',
});

const Overlay = styled(DialogPrimitive.Overlay, {
  backgroundColor: '$backdrop',
  position: 'fixed',
  inset: 0,
  animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  backdropFilter: 'blur(10px)',
});

const Content = styled(DialogPrimitive.Content, {
  border: '1px solid $muted5',
  minWidth: 400,
  backgroundColor: '$elevated',
  borderRadius: 8,
  boxShadow:
    '0 2px 8px rgba(255, 255, 255, 0.05), 0 12px 56px rgba(255, 255, 255, 0.1)',
  overflow: 'hidden',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90vw',
  maxWidth: '450px',
  maxHeight: '85vh',
  '@media (prefers-reduced-motion: no-preference)': {
    animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
  '&:focus': { outline: 'none' },
});
