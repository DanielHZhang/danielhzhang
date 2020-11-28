/** @jsxImportSource @emotion/react */
import Link from 'next/link';
import {Anchor, Button, Flex, Grid, GridItem, Stack} from 'src/components/base';
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
      <GridItem>Main</GridItem>
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
    // <Layout>
    //   <Flex flow='column' mainAxis='center' crossAxis='center'>
    //     <div>Daniel Zhang</div>
    //     <Flex>
    //       <div>Software Engineer</div>
    //       <div>Entrepreneur</div>
    //     </Flex>
    //   </Flex>
    //   <Flex flow='column' mainAxis='space-between'>
    //     <div>About</div>
    //     <div>Skills</div>
    //     <div>Portfolio</div>
    //     <div>Notes</div>
    //   </Flex>
    //   <Stack mainAxis='center' crossAxis='center'>
    //     <Icon.Typescript />
    //     {/* <Icon.Javascript /> */}
    //     <Icon.Html />
    //     <Icon.Css />
    //     <Icon.Python />
    //     <Icon.Electron />
    //     <Icon.Express />
    //     <Icon.Sass />
    //     <Icon.Github />
    //     <Icon.Redux />
    //   </Stack>
    //   <Stack>
    //     <Icon.Kubernetes />
    //     <Icon.Docker />
    //     <Icon.Git />
    //     <Icon.MongoDb />
    //     <Icon.Postgres />
    //     <Icon.Nodejs />
    //     <Icon.Npm />
    //     <Icon.React />
    //     <Icon.Graphql />
    //     <Icon.Webpack />
    //   </Stack>
    //   <Stack>
    //     <Icon.Prisma />
    //     <Icon.Jest />
    //     <Icon.Deno />
    //     <Icon.Fastify />
    //     <Icon.Actions />
    //     <Icon.Jupyter />
    //     <Icon.Babel />
    //     <Icon.Nextjs />
    //     <Icon.Heroku />
    //     <Icon.Java />
    //   </Stack>
    //   {/* Homepage
    //   <Layout>
    //     <Button>Wow</Button>
    //     <Button>Wow</Button>
    //   </Layout> */}
    // </Layout>
  );
}
