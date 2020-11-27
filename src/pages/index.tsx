/** @jsxImportSource @emotion/react */
import {Button, Flex, Grid, GridItem, Stack} from 'src/components/base';
import {Layout} from 'src/components/home/layout';
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
      <GridItem css={{marginLeft: '2rem'}}>
        <Flex flow='column'>
          <Flex>About</Flex>
          <Flex>Skills</Flex>
          <Flex>Portfolio</Flex>
          <Flex>Notes</Flex>
        </Flex>
      </GridItem>
      <GridItem>Main</GridItem>
      <GridItem css={{marginRight: '2rem'}}>
        <Flex flow='column' mainAxis='flex-end'>
          <div css={{textAlign: 'right'}}>GitHub</div>
          <Flex>LinkedIn</Flex>
          <Flex>Email</Flex>
          <Flex>Resume</Flex>
        </Flex>
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
