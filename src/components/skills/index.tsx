import {Flex, Stack} from '@chakra-ui/react';
import {iconData, SkillsRow} from 'src/components/skills/row';
import {PageTitle} from 'src/components/title';

export const Skills = (): JSX.Element => {
  return (
    <Flex direction='column'>
      {/* <HeadTitle description='Expertises' /> */}
      <Flex direction='column'>
        <PageTitle heading='Skills' subheading='TECHNOLOGIES I HAVE EXTENSIVE EXPERIENCE WITH' />
        <Stack direction='row' spacing='5rem' mt='3rem'>
          <SkillsRow title='Languages' data={iconData.languages} />
          <SkillsRow title='Frameworks' data={iconData.frameworks} />
          <SkillsRow title='Runtimes' data={iconData.runtimes} />
          <SkillsRow title='Databases' data={iconData.databases} />
          <SkillsRow title='Tools' data={iconData.tools} />
        </Stack>
      </Flex>
    </Flex>
  );
};
