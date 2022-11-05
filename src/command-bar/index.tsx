import { ReactNode } from 'react';
import { KBarProvider, Action } from 'kbar';

import CommandBarResults from './CommandBarResults';
import CommandBar from './CommandBar';

export default function CommandBarProvider({
  children,
}: {
  children: ReactNode;
}) {
  const actions: Action[] = [
    {
      id: 'translate',
      name: 'Translate to',
      shortcut: ['t'],
      perform: () => window.alert('Blog'),
    },
    {
      id: 'contact',
      name: 'Contact',
      shortcut: ['c'],
      perform: () => window.alert('Contact'),
    },
  ];

  return (
    <KBarProvider actions={actions}>
      <CommandBar>
        <CommandBarResults />
      </CommandBar>

      {children}
    </KBarProvider>
  );
}
