/** @jsxImportSource @emotion/react */
import {Flex, Heading, Stack, Subheading} from 'src/components/base';
import {MainLayout} from 'src/components/layout/main';
import {
  databases,
  frameworks,
  languages,
  runtimes,
  SkillsRow,
  tools,
} from 'src/components/skills/row';
import {Title} from 'src/components/title';

export default function SkillsPage(): JSX.Element {
  return (
    <MainLayout>
      <Title description='Skills' />
      <Flex flow='column' crossAxis='center'>
        <Flex flow='column'>
          <Flex flow='column' css={{marginBottom: '3.6rem'}}>
            <Heading>Skills</Heading>
            <Subheading>TECHNOLOGIES I WORK WITH</Subheading>
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
