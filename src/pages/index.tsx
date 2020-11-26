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
      </Stack>
      {/* Homepage
      <Layout>
        <Button>Wow</Button>
        <Button>Wow</Button>
      </Layout> */}
    </Layout>
  );
}
