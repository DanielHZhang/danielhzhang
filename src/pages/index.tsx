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
          flow='column'
          css={{backgroundColor: '#252525', borderRadius: '6px', margin: '1rem', padding: '1rem'}}
        >
          <div>Languages</div>
          <Stack spacing='1.6rem'>
            <Icon type='javascript' />
            <Icon type='typescript' />
            <Icon type='html' />
            <Icon type='css' />
            <Icon type='sass' />
            <Icon type='python' />
            <Icon type='java' />
          </Stack>
          <div>Frameworks</div>
          <Stack spacing='1.6rem'>
            <Icon type='react' />
            <Icon type='redux' />
            <Icon type='nextjs' />
            <Icon type='graphql' />
            <Icon type='express' />
            <Icon type='fastify' />
            <Icon type='kubernetes' />
          </Stack>
          <div>Runtimes</div>
          <Stack spacing='1.6rem'>
            <Icon type='nodejs' />
            <Icon type='deno' />
            <Icon type='docker' />
            <Icon type='electron' />
            <Icon type='jupyter' />
          </Stack>
          <div>Tools</div>
          <Stack spacing='1.6rem'>
            <Icon type='git' />
            <Icon type='npm' />
            <Icon type='webpack' />
            <Icon type='babel' />
            <Icon type='jest' />
            <Icon type='actions' />
            <Icon type='heroku' />
          </Stack>
          <div>Databases</div>
          <Stack spacing='1.6rem'>
            <Icon type='mongodb' />
            <Icon type='postgres' />
            <Icon type='prisma' />
          </Stack>
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
