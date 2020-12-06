/** @jsxImportSource @emotion/react */
import {Flex, Grid, GridItem} from 'src/components/base';
import {Hero} from 'src/components/home';
import {Hanzi} from 'src/components/home/hanzi';

export default function HomePage(): JSX.Element {
  return (
    <Grid templateColumns='auto 30%' css={{height: '100vh'}}>
      <GridItem justify='end' align='center'>
        <Hero />
      </GridItem>
      <GridItem>
        <Flex>
          <Hanzi type='zhang' />
        </Flex>
      </GridItem>
      <div
        css={{
          position: 'fixed',
          bottom: '4rem',
          left: '4rem',
          transformOrigin: 'top left',
          transform: 'rotate(-90deg)',
        }}
      >
        ---- SCROLL TO SEE MORE
      </div>
    </Grid>
  );
}
