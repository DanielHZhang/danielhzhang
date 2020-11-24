import {jsx} from '@emotion/react';
import {ReactNode} from 'react';
import {Flex} from 'src/components/base';

type Props = {
  children: ReactNode;
};

export const Layout = ({children}: Props): JSX.Element => {
  return <Flex>{children}</Flex>;
};
