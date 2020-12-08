/** @jsxImportSource @emotion/react */
import {motion} from 'framer-motion';
import {Flex, Grid, GridItem, Subheading} from 'src/components/base';
import {HanziHero, Hero, ScrollReminder} from 'src/components/home';

export default function HomePage(): JSX.Element {
  return (
    <Grid templateColumns='auto 30%' css={{height: '100vh'}}>
      {/* <GridItem justify='end' align='center'>
        <Hero />
      </GridItem>
      <GridItem align='center'>
        <HanziHero />
      </GridItem> */}

      <ScrollReminder />
      {/* <svg width='5' height='40' viewBox='0 0 5 40' fill='#fff'>
        <title>Vector Smart Object</title>
        <path d='M0,40V0H1V35H5Z'></path>
      </svg> */}
    </Grid>
  );
}
