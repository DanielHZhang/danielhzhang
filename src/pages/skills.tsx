/** @jsxImportSource @emotion/react */
import {Flex, Heading, Stack} from 'src/components/base';
import {MainLayout} from 'src/components/layout/main';
import {
  databases,
  frameworks,
  languages,
  runtimes,
  SkillsRow,
  tools,
} from 'src/components/skills/row';

export default function SkillsPage(): JSX.Element {
  return (
    <MainLayout>
      <Flex
        flow='column'
        crossAxis='center'
        css={{
          /* backgroundColor: '#252525', */
          borderRadius: '6px',
          padding: '2.4rem',
        }}
      >
        <Flex flow='column'>
          <Flex flow='column' css={{marginBottom: '3.6rem'}}>
            <Heading>Skills</Heading>
            <h2 css={{fontWeight: 300, fontSize: '2.4rem'}}>What I'm good at</h2>
          </Flex>
          <Stack flow='column' spacing='1.6rem'>
            <SkillsRow title='Languages' data={languages} />
            <SkillsRow title='Frameworks' data={frameworks} />
            <SkillsRow title='Runtimes' data={runtimes} />
            <SkillsRow title='Tools' data={tools} />
            <SkillsRow title='Databases' data={databases} />
          </Stack>
        </Flex>
      </Flex>
    </MainLayout>
  );
}
