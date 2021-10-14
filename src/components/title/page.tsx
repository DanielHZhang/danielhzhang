import {Flex} from '@chakra-ui/react';
import {Heading, Subheading} from 'src/components/base';

type Props = {
  heading: string;
  subheading: string;
};

export const PageTitle = ({heading, subheading}: Props): JSX.Element => (
  <Flex direction='column' mb='3.6rem'>
    <Heading>{heading}</Heading>
    <Subheading>{subheading}</Subheading>
  </Flex>
);
