/** @jsxImportSource @emotion/react */
import {ReactNode} from 'react';
import {Flex, Grid, GridItem, Stack} from 'src/components/base';
import {LinkItem} from 'src/components/home/link-item';

type Props = {
  children?: ReactNode;
};

export const MainLayout = ({children}: Props): JSX.Element => {
  return (
    <Grid templateColumns='20rem auto 20rem' templateRows='14rem auto' css={{height: '100vh'}}>
      <GridItem column='1' row='1/-1' css={{marginLeft: '3rem'}}>
        <Stack spacing='1.6rem' flow='column' mainAxis='center' css={{height: '100%'}}>
          {/* <LinkItem align='left' href='/' icon='user-circle'>
            Index
          </LinkItem> */}
          <LinkItem align='left' href='/about' icon='user-circle'>
            About
          </LinkItem>
          <LinkItem align='left' href='/skills' icon='shield-check'>
            Skills
          </LinkItem>
          <LinkItem align='left' href='/porfolio' icon='suitcase'>
            Portfolio
          </LinkItem>
          <LinkItem align='left' href='/notes' icon='notes'>
            Notes
          </LinkItem>
        </Stack>
      </GridItem>
      <GridItem column='2'>
        <Flex flow='column' mainAxis='center' crossAxis='center' css={{height: '100%'}}>
          {/* <div>Hey, I'm</div> */}
          <div css={{fontSize: '3.2rem'}}>Daniel Zhang</div>
          <Flex mainAxis='center' crossAxis='center'>
            <div>Software Engineer</div>
            <div>Entrepreneur</div>
          </Flex>
        </Flex>
      </GridItem>
      <GridItem column='3' row='1/-1' css={{marginRight: '3rem'}}>
        <Stack spacing='1.6rem' flow='column' mainAxis='center' css={{height: '100%'}}>
          <LinkItem align='right' href='/' icon='github'>
            GitHub
          </LinkItem>
          <LinkItem align='right' href='/linkedin' icon='linkedin'>
            LinkedIn
          </LinkItem>
          <LinkItem align='right' href='mailto:wow@gmail.com' icon='mail'>
            Email
          </LinkItem>
          <LinkItem align='right' href='/resume' icon='file'>
            Resume
          </LinkItem>
        </Stack>
      </GridItem>
      {children && (
        <GridItem column='2' css={{padding: '2.4rem'}}>
          {children}
        </GridItem>
      )}
    </Grid>
  );
};
