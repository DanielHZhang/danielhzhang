import {css} from '@emotion/react';
import styled from '@emotion/styled';

type Props = {
  level?: 1 | 2 | 3;
};

export const Heading = styled.h1<Props>(
  ({level = 1}) => css`
    color: #9e7a7a;
    color: var(--font-color-heading-primary);
    font-family: var(--font-heading);
    font-size: ${level === 1 ? '7.2rem' : level === 2 ? '3rem' : '2.4rem'};
    font-weight: ${level === 1 ? 600 : level === 2 ? 600 : 500};
    margin: 0;
  `
);

export const Subheading = styled.h2`
  color: var(--font-color-heading-secondary);
  font-family: var(--font-subheading);
  /* font-weight: 300; */
  letter-spacing: 0.1rem;
`;
