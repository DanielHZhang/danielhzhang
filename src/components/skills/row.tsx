import {Flex, Stack, Text} from '@chakra-ui/react';
import {Subheading, Tooltip} from 'src/components/base';
import {Icon, IconType} from 'src/components/icons';

type IconData = {
  type: IconType;
  label: string;
};

export const iconData: Record<string, IconData[]> = {
  languages: [
    {type: 'javascript', label: 'Javascript'},
    {type: 'typescript', label: 'Typescript'},
    {type: 'python', label: 'Python'},
    {type: 'java', label: 'Java'},
    {type: 'html', label: 'HTML'},
    {type: 'css', label: 'CSS'},
    {type: 'sass', label: 'Sass'},
  ],
  frameworks: [
    {type: 'react', label: 'React'},
    {type: 'redux', label: 'Redux'},
    {type: 'graphql', label: 'GraphQL'},
    {type: 'nextjs', label: 'Next.js'},
    {type: 'express', label: 'Express'},
    {type: 'fastify', label: 'Fastify'},
    {type: 'kubernetes', label: 'Kubernetes'},
  ],
  runtimes: [
    {type: 'nodejs', label: 'Node.js'},
    {type: 'deno', label: 'Deno'},
    {type: 'docker', label: 'Docker'},
    {type: 'electron', label: 'Electron'},
    {type: 'jupyter', label: 'Jupyter'},
  ],
  tools: [
    {type: 'git', label: 'Git'},
    {type: 'npm', label: 'NPM'},
    {type: 'webpack', label: 'Webpack'},
    {type: 'babel', label: 'Babel'},
    {type: 'jest', label: 'Jest'},
    {type: 'actions', label: 'GitHub Actions'},
    {type: 'heroku', label: 'Heroku'},
  ],
  databases: [
    {type: 'mongodb', label: 'MongoDB'},
    {type: 'postgres', label: 'PostgreSQL'},
    {type: 'prisma', label: 'Prisma'},
  ],
};

type Props = {
  title: string;
  data: IconData[];
};

export const SkillsRow = ({data, title}: Props): JSX.Element => (
  <div>
    <Subheading>{title}</Subheading>
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
  </div>
);
