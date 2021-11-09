import { useMemo } from 'react';
import { useWindowSize } from '.';

function useContainer(midSize: number) {
  const windowSize = useWindowSize();
  const container = useMemo(
    () => (windowSize.width < midSize ? 'mobile' : 'desktop'),
    [windowSize]
  );
  return container;
}

export { useContainer };
