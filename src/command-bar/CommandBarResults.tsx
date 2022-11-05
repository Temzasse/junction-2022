import { KBarResults, useMatches } from 'kbar';
import { styled } from '../styled';

export default function CommandBarResults() {
  const { results } = useMatches();

  return (
    <KBarResults
      items={results}
      onRender={({ item, active }) =>
        typeof item === 'string' ? (
          <div>{item}</div>
        ) : (
          <ResultRow active={active}>{item.name}</ResultRow>
        )
      }
    />
  );
}

const ResultRow = styled('div', {
  padding: 16,
  variants: {
    active: {
      true: {
        backgroundColor: '$muted5',
      },
      false: {
        backgroundColor: 'transparent',
      },
    },
  },
});
