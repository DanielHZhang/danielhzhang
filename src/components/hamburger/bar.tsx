/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';

type Props = {
  // top: number;
};

export const HamburgerMenuBar = (): JSX.Element => {
  return (
    <span
      css={css`
        &::before {
          content: '';
          display: block;
          width: 32px;
          height: 2px;
          background-color: var(--font-color-primary);
          border-radius: 2px;
        }
      `}
    />
  );
};
