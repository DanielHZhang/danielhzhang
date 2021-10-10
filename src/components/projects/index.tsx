import {Flex} from '@chakra-ui/react';
import {PageTitle} from 'src/components/title';
import {r} from 'src/utils';

const projects = [
  {
    title: 'Supersede',
    tags: ['React', 'Redux', 'Webpack'],
    description: 'Supersede is a web platform that allows students',
    url: 'https://www.memorizeanything.net',
  },
  {
    title: 'DevCertified',
    tags: ['React', 'Docker'],
    description: r`DevCertified is an online platform that allows recruiters to conduct real-time
		coding interviews`,
    url: 'https://www.devcertified.com',
  },
  {
    title: 'Cruizor',
    tags: ['React'],
    type: 'Platform',
    description: '',
  },
  {
    title: 'Superbuffer',
    type: 'Library',
    tags: ['TypeScript', 'Open Source'],
    description: r`Superbuffer is framework for serializing and deserializing JSON objects into a
		raw binary format, allowing for over 50% compression over the wire compared to regular JSON.
		Superbuffer is fully type-safe and is able to infer object types from your schema.`,
  },
  {
    title: 'tsc-suppress',
    type: 'Tool',
    oss: true,
    description: r`tsc-suppress is a lightweight wrapper for the TypeScript compiler that
		automatically adds the ability to skip type-checking during development in order to speed
		up compilation times.`,
    url: '',
  },
];

export const Projects = (): JSX.Element => {
  return (
    <Flex>
      <PageTitle heading='Projects' subheading='STUFF I HAVE WORKED ON' />
      <Flex>Project here</Flex>
    </Flex>
  );
};
