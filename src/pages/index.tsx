import React from 'react';
import {Button, Flex, Stack} from 'src/components/base';
import {Layout} from 'src/components/home/layout';
import {Icon} from 'src/components/icons';

export default function HomePage(): JSX.Element {
  return (
    <Layout>
      <Flex flow='column' mainAxis='center' crossAxis='center'>
        <div>Daniel Zhang</div>
        <Flex>
          <div>Software Engineer</div>
          <div>Entrepreneur</div>
        </Flex>
      </Flex>
      <Flex flow='column' mainAxis='space-between'>
        <div>About</div>
        <div>Skills</div>
        <div>Portfolio</div>
        <div>Notes</div>
      </Flex>
      <Stack mainAxis='center' crossAxis='center'>
        <Icon.Typescript />
        <Icon.Javascript />
        <Icon.Html />
        <Icon.Css />
        <Icon.Python />
        <Icon.Electron />
        <Icon.Express />
        <Icon.Sass />
        <Icon.Github />
        <Icon.Redux />
      </Stack>
      <Stack>
        <Icon.Kubernetes />
        <Icon.Docker />
        <Icon.Git />
        <Icon.MongoDb />
        <Icon.Postgres />
        <Icon.Nodejs />
        <Icon.Npm />
        <Icon.React />
        <Icon.Graphql />
        <Icon.Webpack />
      </Stack>
      <Stack>
        <Icon.Prisma />
        <Icon.Jest />
        <Icon.Deno />
        <Icon.Fastify />
        <Icon.GithubActions />
        <Icon.Jupyter />
        <Icon.Babel />
        <Icon.Nextjs />
        <Icon.Heroku />
        <Icon.Java />
      </Stack>
      {/* Homepage
      <Layout>
        <Button>Wow</Button>
        <Button>Wow</Button>
      </Layout> */}
    </Layout>
  );
}
