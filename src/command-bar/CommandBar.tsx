import { ReactNode } from 'react';

import { KBarPortal, KBarPositioner, KBarAnimator, KBarSearch } from 'kbar';
import { styled } from '../styled';

export default function CommandBar({ children }: { children: ReactNode }) {
  return (
    <KBarPortal>
      <CommandBarPositioner>
        <CommandBarAnimator>
          <CommandBarSearch placeholder="What would you like to generate?" />
          {children}
        </CommandBarAnimator>
      </CommandBarPositioner>
    </KBarPortal>
  );
}

const CommandBarPositioner = styled(KBarPositioner, {
  backdropFilter: 'blur(10px)',
});

const CommandBarAnimator = styled(KBarAnimator, {
  border: '1px solid $muted5',
  minWidth: 400,
  backgroundColor: '$elevated',
  borderRadius: 8,
  boxShadow:
    '0 2px 8px rgba(255, 255, 255, 0.05), 0 12px 56px rgba(255, 255, 255, 0.1)',
  overflow: 'hidden',
});

const CommandBarSearch = styled(KBarSearch, {
  backgroundColor: '$elevated',
  border: 'none',
  width: '100%',
  padding: 16,
  outline: 'none',
  color: '$textMuted',
});
