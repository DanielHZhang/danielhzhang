import {useEffect, useRef} from 'react';

export function useAnimationFrame(
  callback: (timeElapsed: number) => void,
  isActive: boolean
): void {
  const savedCallback = useRef<(timeElapsed: number) => void>();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const tick = () => {
      const timeElapsed = Date.now() - startTime;
      startTime = Date.now();
      animationFrame = window.requestAnimationFrame(tick);
      savedCallback.current?.(timeElapsed);
    };

    if (isActive) {
      startTime = Date.now();
      animationFrame = window.requestAnimationFrame(tick);
    }

    return () => {
      window.cancelAnimationFrame(animationFrame);
    };
  }, [isActive]);
}
