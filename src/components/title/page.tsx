import {Flex, Heading, Subheading} from 'src/components/base';

type Props = {
  heading: string;
  subheading: string;
};

export const PageTitle = ({heading, subheading}: Props): JSX.Element => (
  <Flex flow='column'>
    <Heading>{heading}</Heading>
    <Subheading>{subheading}</Subheading>
  </Flex>
);
