import {useRef, useEffect, useState, ReactNode} from 'react';
import {createPortal} from 'react-dom';

type Props = {
  children: ReactNode;
  selector: string;
};

/**
 * See: https://github.com/vercel/next.js/blob/canary/examples/with-portals/components/ClientOnlyPortal.js
 */
export const Portal = ({children, selector}: Props): JSX.Element | null => {
  const ref = useRef<Element | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.querySelector(selector);
    setMounted(true);
  }, [selector]);

  return mounted && ref.current ? createPortal(children, ref.current) : null;
};
