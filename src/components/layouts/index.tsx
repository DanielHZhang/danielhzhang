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
      <div css={{position: 'fixed', left: 0, padding: '3rem', height: '100%'}}>
        <Stack spacing='1.6rem' flow='column' mainAxis='center' css={{height: '100%'}}>
          <LinkItem align='left' href='/about' icon='user-circle'>
            About
          </LinkItem>
          <LinkItem align='left' href='/skills' icon='shield-check'>
            Skills
          </LinkItem>
          <LinkItem align='left' href='/portfolio' icon='suitcase'>
            Portfolio
          </LinkItem>
          <LinkItem align='left' href='/notes' icon='notes'>
            Notes
          </LinkItem>
        </Stack>
      </div>
      <div css={{position: 'fixed', right: 0, padding: '3rem', height: '100%'}}>
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
      </div>
      <GridItem column='2' css={{position: 'relative'}}>
        <Flex
          flow='column'
          mainAxis='center'
          crossAxis='center'
          css={{
            position: 'fixed',
            paddingTop: '2.8rem',
            height: '14rem',
            left: 0,
            right: 0,
            userSelect: 'none',
          }}
        >
          <div
            css={{
              color: '#fff',
              fontSize: '5rem',
              fontFamily: 'Spartan',
              fontWeight: 500,
              lineHeight: '5rem',
              letterSpacing: '0.2rem',
            }}
          >
            DANIEL ZHANG
          </div>
          <Flex
            mainAxis='center'
            crossAxis='center'
            css={{fontFamily: 'Inconsolata', fontSize: '1.8rem'}}
          >
            <div>software engineer // entrepreneur</div>
          </Flex>
        </Flex>
      </GridItem>
      {children && (
        <GridItem column='2' css={{padding: '2.4rem'}}>
          {children}
        </GridItem>
      )}
    </Grid>
  );
};
