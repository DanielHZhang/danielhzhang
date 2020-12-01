/** @jsxImportSource @emotion/react */
import {Heading, Stack, Tooltip} from 'src/components/base';
import {Icon, IconType} from 'src/components/icons';

type IconData = {
  type: IconType;
  label: string;
};

export const languages: IconData[] = [
  {type: 'javascript', label: 'Javascript'},
  {type: 'typescript', label: 'Typescript'},
  {type: 'html', label: 'HTML'},
  {type: 'css', label: 'CSS'},
  {type: 'sass', label: 'Sass'},
  {type: 'python', label: 'Python'},
  {type: 'java', label: 'Java'},
];

export const frameworks: IconData[] = [
  {type: 'react', label: 'React'},
  {type: 'redux', label: 'Redux'},
  {type: 'graphql', label: 'GraphQL'},
  {type: 'nextjs', label: 'Next.js'},
  {type: 'express', label: 'Express'},
  {type: 'fastify', label: 'Fastify'},
  {type: 'kubernetes', label: 'Kubernetes'},
];

export const runtimes: IconData[] = [
  {type: 'nodejs', label: 'Node.js'},
  {type: 'deno', label: 'Deno'},
  {type: 'docker', label: 'Docker'},
  {type: 'electron', label: 'Electron'},
  {type: 'jupyter', label: 'Jupyter Notebook'},
];

export const tools: IconData[] = [
  {type: 'git', label: 'Git'},
  {type: 'npm', label: 'NPM'},
  {type: 'webpack', label: 'Webpack'},
  {type: 'babel', label: 'Babel'},
  {type: 'jest', label: 'Jest'},
  {type: 'actions', label: 'GitHub Actions CI'},
  {type: 'heroku', label: 'Heroku'},
];

export const databases: IconData[] = [
  {type: 'mongodb', label: 'MongoDB'},
  {type: 'postgres', label: 'PostgreSQL'},
  {type: 'prisma', label: 'Prisma'},
];

type Props = {
  title: string;
  data: IconData[];
};

export const SkillsRow = ({data, title}: Props): JSX.Element => (
  <div>
    <Heading level={3}>{title}</Heading>
    <Stack spacing='2rem' css={{marginTop: '0.6rem'}}>
      {data.map(({type, label}, index) => (
        <Tooltip key={index} label={label}>
          <Icon type={type} />
        </Tooltip>
      ))}
    </Stack>
  </div>
);
