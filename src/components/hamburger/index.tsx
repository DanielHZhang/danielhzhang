/** @jsxImportSource @emotion/react */

import {css} from '@emotion/react';
import {AnimatePresence, motion} from 'framer-motion';
import {MouseEvent, useState} from 'react';
import {HamburgerMenuBar} from 'src/components/hamburger/bar';

type Props = {
  open?: boolean;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => any;
};

export const HamburgerMenu = ({open, onClick}: Props): JSX.Element => {
  const [hovering, setHovering] = useState(false);

  return (
    <motion.button
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      onClick={onClick}
      type='button'
      css={css`
        height: 24px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        &:focus {
          outline: none;
        }
      `}
    >
      {([0, 1, 2] as const).map((val) => (
        <HamburgerMenuBar key={val} index={val} hovering={hovering} open={open} />
      ))}
    </motion.button>
  );
};
