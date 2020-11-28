/** @jsxImportSource @emotion/react */
import Link from 'next/link';
import {Button, Flex, Grid, GridItem, Stack} from 'src/components/base';
import {Layout} from 'src/components/home/layout';
import {LinkItem} from 'src/components/home/link-item';
import {Icon} from 'src/components/icons';

export default function HomePage(): JSX.Element {
  return (
    <Grid
      templateColumns='200px auto 200px'
      templateRows='100px auto 50px'
      templateAreas='"header header header" "left main right"'
      css={{height: '100vh'}}
    >
      <GridItem column='1/-1'>
        <Flex flow='column' mainAxis='center' crossAxis='center'>
          <div>Hey, I'm</div>
          <div>Daniel Zhang</div>
        </Flex>
        <Flex mainAxis='center' crossAxis='center'>
          <div>Software Engineer</div>
          <div>Entrepreneur</div>
        </Flex>
      </GridItem>
      <GridItem css={{marginLeft: '3rem'}}>
        <Stack spacing='1.6rem' flow='column' mainAxis='center' css={{height: '100%'}}>
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
      <GridItem>
        <Flex
          css={{backgroundColor: '#252525', borderRadius: '6px', margin: '1rem', padding: '1rem'}}
        >
          <Icon type='javascript' />
          <Icon type='typescript' />
          <Icon type='html' />
          <Icon type='css' />
          <Icon type='python' />
        </Flex>
      </GridItem>
      <GridItem css={{marginRight: '3rem'}}>
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
      <GridItem column='1/-1'>Made with love from Toronto.</GridItem>
    </Grid>
  );
}
