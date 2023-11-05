import { EffectCallback, useEffect } from 'react';

export function useDidMount(effect: EffectCallback): void {
  useEffect(effect, []);
}
