import {MutableRefObject, useEffect, useRef} from 'react';

export function useLatest<T>(current: T): MutableRefObject<T> {
  const value = useRef(current);
  useEffect(() => {
    value.current = current;
  });
  return value;
}
