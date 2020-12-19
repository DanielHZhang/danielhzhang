/** @jsxImportSource @emotion/react */
import {Flex, Stack} from 'src/components/base';
import {MainLayout} from 'src/components/layouts';
import {iconData, SkillsRow} from 'src/components/skills/row';
import {PageTitle, HeadTitle} from 'src/components/title';

export default function SkillsPage(): JSX.Element {
  return (
    <MainLayout>
      <HeadTitle description='Expertises' />
      <Flex flow='column' crossAxis='center'>
        <Flex flow='column'>
          <PageTitle heading='Skills' subheading='TECHNOLOGIES I WORK WITH' />
          <Stack flow='column' spacing='1.6rem' css={{marginTop: '3.6rem'}}>
            <SkillsRow title='Languages' data={iconData.languages} />
            <SkillsRow title='Frameworks' data={iconData.frameworks} />
            <SkillsRow title='Runtimes' data={iconData.runtimes} />
            <SkillsRow title='Tools' data={iconData.tools} />
            <SkillsRow title='Databases' data={iconData.databases} />
          </Stack>
        </Flex>
      </Flex>
    </MainLayout>
  );
}
