/** @jsxImportSource @emotion/react */
import {Flex, Heading, Stack} from 'src/components/base';
import {Icon} from 'src/components/icons';

export default function SkillsPage(): JSX.Element {
  return (
    <Flex
      flow='column'
      css={{backgroundColor: '#252525', borderRadius: '6px', margin: '1rem', padding: '1rem'}}
    >
      <Heading>Languages</Heading>
      <Stack spacing='1.6rem'>
        <Icon type='javascript' />
        <Icon type='typescript' />
        <Icon type='html' />
        <Icon type='css' />
        <Icon type='sass' />
        <Icon type='python' />
        <Icon type='java' />
      </Stack>
      <Heading>Frameworks</Heading>
      <Stack spacing='1.6rem'>
        <Icon type='react' />
        <Icon type='redux' />
        <Icon type='nextjs' />
        <Icon type='graphql' />
        <Icon type='express' />
        <Icon type='fastify' />
        <Icon type='kubernetes' />
      </Stack>
      <Heading>Runtimes</Heading>
      <Stack spacing='1.6rem'>
        <Icon type='nodejs' />
        <Icon type='deno' />
        <Icon type='docker' />
        <Icon type='electron' />
        <Icon type='jupyter' />
      </Stack>
      <Heading>Tools</Heading>
      <Stack spacing='1.6rem'>
        <Icon type='git' />
        <Icon type='npm' />
        <Icon type='webpack' />
        <Icon type='babel' />
        <Icon type='jest' />
        <Icon type='actions' />
        <Icon type='heroku' />
      </Stack>
      <Heading>Databases</Heading>
      <Stack spacing='1.6rem'>
        <Icon type='mongodb' />
        <Icon type='postgres' />
        <Icon type='prisma' />
      </Stack>
    </Flex>
  );
}
