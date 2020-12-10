import {MutableRefObject, useCallback, useEffect} from 'react';
import {IS_BROWSER} from 'src/config/constants';

export function useEventListener(
  target: 'window' | 'document' | MutableRefObject<HTMLElement | null | undefined>,
  eventName: string,
  handler: (event: any) => any,
  deps?: any[]
): void {
  if (!IS_BROWSER) {
    return; // Do not run on SSR
  }
  const eventListener = useCallback(handler, deps || []);
  useEffect(() => {
    let element: Window | Document | HTMLElement;
    if (target === 'document') {
      element = document;
    } else if (target === 'window') {
      element = window;
    } else {
      if (!target.current) {
        return;
      }
      element = target.current;
    }
    if (!element.addEventListener) {
      return;
    }
    element.addEventListener(eventName, eventListener);
    return () => {
      element.removeEventListener(eventName, eventListener);
    };
  }, [target, eventName, eventListener]);
}
