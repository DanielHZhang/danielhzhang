/** @jsxImportSource @emotion/react */
import {Flex, Heading, Stack, Tooltip} from 'src/components/base';
import {Icon} from 'src/components/icons';
import {MainLayout} from 'src/components/layout/main';

export default function SkillsPage(): JSX.Element {
  return (
    <MainLayout>
      <Flex
        flow='column'
        // mainAxis='center'
        crossAxis='center'
        css={{
          /* backgroundColor: '#252525', */ borderRadius: '6px',
          // margin: '1rem',
          padding: '2.4rem',
        }}
      >
        <Flex flow='column'>
          <Flex flow='column' css={{marginBottom: '4rem'}}>
            <Heading>Skills</Heading>
            <div>What I'm good at</div>
          </Flex>
          <Stack flow='column' spacing='1.6rem'>
            <div>
              <Heading level={3}>Languages</Heading>
              <Stack spacing='2rem' css={{marginTop: '0.6rem'}}>
                <Tooltip>
                  <span ref={(ref) => console.log(ref)}>
                    <Icon type='javascript' />
                  </span>
                </Tooltip>
                <Icon type='typescript' />
                <Icon type='html' />
                <Icon type='css' />
                <Icon type='sass' />
                <Icon type='python' />
                <Icon type='java' />
              </Stack>
            </div>
            <div>
              <Heading level={3}>Frameworks</Heading>
              <Stack spacing='2rem' css={{marginTop: '0.6rem'}}>
                <Icon type='react' />
                <Icon type='redux' />
                <Icon type='nextjs' />
                <Icon type='graphql' />
                <Icon type='express' />
                <Icon type='fastify' />
                <Icon type='kubernetes' />
              </Stack>
            </div>
            <div>
              <Heading level={3}>Runtimes</Heading>
              <Stack spacing='2rem' css={{marginTop: '0.6rem'}}>
                <Icon type='nodejs' />
                <Icon type='deno' />
                <Icon type='docker' />
                <Icon type='electron' />
                <Icon type='jupyter' />
              </Stack>
            </div>
            <div>
              <Heading level={3}>Tools</Heading>
              <Stack spacing='2rem' css={{marginTop: '0.6rem'}}>
                <Icon type='git' />
                <Icon type='npm' />
                <Icon type='webpack' />
                <Icon type='babel' />
                <Icon type='jest' />
                <Icon type='actions' />
                <Icon type='heroku' />
              </Stack>
            </div>
            <div>
              <Heading level={3}>Databases</Heading>
              <Stack spacing='2rem' css={{marginTop: '0.6rem'}}>
                <Icon type='mongodb' />
                <Icon type='postgres' />
                <Icon type='prisma' />
              </Stack>
            </div>
          </Stack>
        </Flex>
      </Flex>
    </MainLayout>
  );
}
