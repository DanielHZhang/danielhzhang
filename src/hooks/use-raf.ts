import {useEffect, useRef} from 'react';

/* eslint-disable @typescript-eslint/no-use-before-define */

export function useRaf(callback: (timeElapsed: number) => void, isActive: boolean): void {
  const savedCallback = useRef<(timeElapsed: number) => void>();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    function loop() {
      animationFrame = window.requestAnimationFrame(tick);
    }

    function tick() {
      const timeElapsed = Date.now() - startTime;
      startTime = Date.now();
      loop();
      savedCallback.current?.(timeElapsed);
    }

    if (isActive) {
      startTime = Date.now();
      loop();
      return () => {
        window.cancelAnimationFrame(animationFrame);
      };
    }
    return;
  }, [isActive]);
}
