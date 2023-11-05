import { IS_BROWSER } from '@/config/constants';
import { useLatest } from '@/hooks';
import { rafThrottle } from '@/utils';
import { RefObject, useLayoutEffect } from 'react';

type Callback = (entry: ResizeObserverEntry, observer: ResizeObserver) => void;

class CachedResizeObserver {
  private static instance: CachedResizeObserver;
  private callbacks = new Map<Element, Callback[]>();
  private _observer = new ResizeObserver(
    rafThrottle((entries, obs) => {
      for (let i = 0; i < entries.length; ++i) {
        this.callbacks.get(entries[i].target)?.forEach((cb) => cb(entries[i], obs));
      }
    }),
  );

  // eslint-disable-next-line
  private constructor() {}

  public static get() {
    if (!this.instance) {
      this.instance = new CachedResizeObserver();
    }
    return this.instance;
  }

  public get observer() {
    return this._observer;
  }

  public subscribe(target: Element, callback: Callback) {
    this._observer.observe(target);
    const callbacks = this.callbacks.get(target) || [];
    callbacks.push(callback);
    this.callbacks.set(target, callbacks);
  }

  public unsubscribe(target: Element, callback: Callback) {
    const callbacks = this.callbacks.get(target);
    if (callbacks) {
      const index = callbacks.indexOf(callback);
      if (index >= 0) {
        callbacks.splice(index, 1);
      }
      if (callbacks.length === 0) {
        this.callbacks.delete(target);
        this._observer.unobserve(target);
      }
    }
  }
}

export function useResizeObserver<T extends HTMLElement>(callback: Callback, target: RefObject<T> | T | null): void {
  if (!IS_BROWSER) {
    return; // Don't run on SSR
  }
  const observer = CachedResizeObserver.get();
  const latestCallback = useLatest(callback);

  useLayoutEffect(() => {
    let isSubscribed = true;
    const element = target && 'current' in target ? target.current : target;
    if (!element) {
      return () => undefined;
    }
    const cb: Callback = (entry, obs) => {
      if (!isSubscribed) {
        return;
      }
      latestCallback.current(entry, obs);
    };
    observer.subscribe(element, cb);
    return () => {
      isSubscribed = false;
      observer.unsubscribe(element, cb);
    };
  }, [target, observer, latestCallback]);
}
