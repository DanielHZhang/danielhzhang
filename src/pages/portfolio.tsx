/** @jsxImportSource @emotion/react */
import {jsx, css} from '@emotion/react';
import {Flex, Heading, Subheading} from 'src/components/base';
import {MainLayout} from 'src/components/layouts';

const testItems = [
  {title: 'Weave Travels', type: 'Internship', description: ''},
  {
    title: 'Supersede',
    type: 'SaaS',
    description: 'Supersede is a web platform that allows students',
  },
  {title: 'Devcertified', type: 'SaaS', description: ''},
  {title: 'Cruizor', type: 'Platform', description: ''},
  {title: 'Superbuffer', type: 'Library', oss: true, description: ''},
  {title: 'tsc-suppress', type: 'Tool', oss: true, description: ''},
];

type Props = {
  title: string;
  description: string;
};

const ProjectItemPreview = ({title, description}: Props): JSX.Element => {
  return (
    <Flex
      flow='column'
      css={css`
        border-radius: 6px;
        background-color: #2e2e2e;
        margin-bottom: 1.2rem;
      `}
    >
      <div>{title}</div>
      <div>{description}</div>
      <div>Some image of the project</div>
      <div>What technologies this project used</div>
    </Flex>
  );
};

export default function PortfolioPage(): JSX.Element {
  return (
    <Flex
      flow='column'
      css={css`
        margin: 0 12%;
      `}
    >
      <Heading>Portfolio</Heading>
      <Subheading>TECHNOLOGIES I'VE USED EXTENSIVELY</Subheading>
      <Flex>
        test
        <div>wow</div>
      </Flex>
      <Subheading>WHAT I'VE WORKED ON</Subheading>
      <Flex flow='column'>
        {testItems.map((item) => (
          <ProjectItemPreview {...item} />
        ))}
      </Flex>
    </Flex>
  );
}
