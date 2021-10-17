import {Box, Flex, Heading, Stack, Text} from '@chakra-ui/react';
import {WaterfallGrid} from 'src/components/common/waterfall';
import {PageTitle} from 'src/components/title';
import {r} from 'src/utils';

type ProjectData = {
  title: string;
  tags: string[];
  description: string;
  url?: string;
};

const projects: ProjectData[] = [
  {
    title: 'Supersede',
    tags: ['React', 'Redux', 'Webpack'],
    description: 'Supersede is a web platform that allows students',
    url: 'https://www.memorizeanything.net',
  },
  {
    title: 'DevCertified',
    tags: ['React', 'Docker'],
    description: r`DevCertified is an online code editor and execution environment that simplifies
		conducting coding interviews with prospective candidates for recruiters.`,
    url: 'https://www.devcertified.com',
  },
  {
    title: 'Cruizor',
    tags: ['React'],
    description: '',
  },
  {
    title: 'Superbuffer',
    tags: ['TypeScript', 'Open Source'],
    description: r`Superbuffer is a type-safe library for serializing and deserializing JSON
		into raw binary and for over 50% compression over the wire compared to regular JSON.`,
  },
  {
    title: 'tsc-suppress',
    tags: ['TypeScript', 'Open Source', 'Compiler'],
    description: r`tsc-suppress is a lightweight wrapper for the TypeScript compiler that
		automatically adds the ability to skip type-checking during development in order to speed
		up compilation times.`,
    url: '',
  },
];

const ProjectItem = (props: ProjectData): JSX.Element => {
  return (
    <Flex
      direction='column'
      color='white'
      border='2px solid red'
      /* bgColor='blue.500' */
      borderRadius='12px'
      padding='2rem'
    >
      <Heading color='gold'>{props.title}</Heading>
      <Text color='whiteAlpha.700'>{props.description}</Text>
      <Stack direction='row' align='flex-start'>
        {props.tags.map((value, index) => (
          <Box key={index} bgColor='red.400' p='0.4rem 0.8rem' borderRadius='8px'>
            {value}
          </Box>
        ))}
      </Stack>
    </Flex>
  );
};

export const Projects = (): JSX.Element => {
  return (
    <Flex direction='column' mb='4rem'>
      <PageTitle heading='Projects' subheading='STUFF I HAVE WORKED ON' />
      <WaterfallGrid items={projects}>
        {(data, index) => <ProjectItem key={index} {...data} />}
      </WaterfallGrid>
    </Flex>
  );
};
