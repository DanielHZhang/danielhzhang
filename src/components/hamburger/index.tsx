/** @jsxImportSource @emotion/react */

import {css} from '@emotion/react';
import {MouseEvent} from 'react';
import {Stack, Tooltip} from 'src/components/base';
import {HamburgerMenuBar} from 'src/components/hamburger/bar';

type Props = {
  onClick?: (event: MouseEvent<HTMLButtonElement>) => any;
};

export const HamburgerMenu = ({onClick}: Props): JSX.Element => {
  return (
    <Tooltip label='Menu'>
      <button
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
        <HamburgerMenuBar />
        <HamburgerMenuBar />
        <HamburgerMenuBar />
      </button>
    </Tooltip>
  );
};
