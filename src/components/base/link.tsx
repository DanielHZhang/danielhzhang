import styled from '@emotion/styled';

export const Anchor = styled.a`
  color: var(--font-color-link);
  cursor: pointer;
  transition: color ease-in-out 200ms;
  &:hover {
    color: var(--font-color-heading-primary);
  }
`;
