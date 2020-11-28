import styled from '@emotion/styled';
import {Flex} from 'src/components/base';

type Props = {
  spacing?: string;
};

export const Stack = styled(Flex)<Props>(({flow = 'row', spacing = '1rem'}) => ({
  '& > * + *': {
    marginLeft: flow === 'row' ? spacing : undefined,
    marginTop: flow === 'column' ? spacing : undefined,
  },
}));
