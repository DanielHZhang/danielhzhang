import {css} from '@emotion/react';
import styled from '@emotion/styled';

type Props = {
  level?: 1 | 2 | 3;
};

export const Heading = styled.h1<Props>(
  ({level = 1}) => css`
    font-size: ${level === 1 ? '3.6rem' : level === 2 ? '3rem' : '2.4rem'};
    font-weight: ${level === 1 ? 700 : level === 2 ? 600 : 500};
    margin: 0;
  `
);
