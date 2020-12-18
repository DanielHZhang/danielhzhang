/** @jsxImportSource @emotion/react */

import {css} from '@emotion/react';
import {motion, TargetAndTransition} from 'framer-motion';

type Props = {
  index: 0 | 1 | 2;
  hovering: boolean;
  open?: boolean;
};

export const HamburgerMenuBar = ({hovering, index, open}: Props): JSX.Element => {
  const getAnimate = (): TargetAndTransition => {
    if (open) {
      return {x: 0, rotate: 45};
      // if (index === 0) {
      //   return {x: 0, rotate: 45};
      // }
      // if (index === 1) {
      //   return {x: 0, opacity: 0};
      // }
      // return {x: 0, rotate: -45};
    }

    if (hovering) {
      if (index === 0) {
        return {x: -5};
      }
      if (index === 2) {
        return {x: 5};
      }
      return {rotate: -45};
    }
    return {x: 0, rotate: 0, opacity: 1};
  };

  return (
    <motion.span
      initial={false}
      animate={getAnimate()}
      custom={index}
      css={css`
        /* transform-origin: ${index === 1 ? 'initial' : 'top left'}; */
        &::before {
          content: '';
          display: block;
          width: 32px;
          height: 2px;
          background-color: var(--font-color-heading-secondary);
          border-radius: 2px;
        }
      `}
    />
  );
};
