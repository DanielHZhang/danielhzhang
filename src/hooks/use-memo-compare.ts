import { useEffect, useRef } from 'react';

export function useMemoCompare<T>(next: T, compare: (prev: T | undefined, next: T) => boolean): T | undefined {
  const previousRef = useRef<T | undefined>();
  const previous = previousRef.current;
  const isEqual = compare(previous, next);

  useEffect(() => {
    if (!isEqual) {
      previousRef.current = next;
    }
  });

  return isEqual ? previous : next;
}
