import {Box, Flex, Heading, Stack, Text} from '@chakra-ui/react';
import {Tooltip} from 'src/components/base';
import {Icon} from 'src/components/icons';
import {SkillsData} from 'src/content';

type Props = {
  title: string;
  data: SkillsData[];
};

export const SkillsRow = ({data, title}: Props): JSX.Element => (
  <Box>
    <Heading fontSize='2.2rem' lineHeight='2.2rem' color='gold'>
      {title}
    </Heading>
    <Stack mt='0.6rem' spacing='1rem'>
      {data.map(({type, label}, index) => (
        <Tooltip key={index} label={label}>
          <Flex alignItems='center'>
            <Icon type={type} size='3.2rem' />
            <Text color='whiteAlpha.700' ml='0.8rem'>
              {label}
            </Text>
          </Flex>
        </Tooltip>
      ))}
    </Stack>
  </Box>
);
