import React from 'react';
import {Button, Flex} from 'src/components/base';
import {Layout} from 'src/components/home/layout';

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
      {/* Homepage
      <Layout>
        <Button>Wow</Button>
        <Button>Wow</Button>
      </Layout> */}
    </Layout>
  );
}
