import React from 'react';
import {Button} from 'src/components/base';
import {Layout} from 'src/components/home/layout';

export default function HomePage(): JSX.Element {
  return (
    <Layout>
      Homepage
      <Button>Wow</Button>
    </Layout>
  );
}
