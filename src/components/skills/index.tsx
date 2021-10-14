import {Flex} from '@chakra-ui/react';
import {iconData, SkillsRow} from 'src/components/skills/row';
import {PageTitle} from 'src/components/title';

export const Skills = (): JSX.Element => {
  return (
    <Flex direction='column'>
      <PageTitle heading='Skills' subheading='TECHNOLOGIES I HAVE USED EXTENSIVELY' />
      <Flex justify='space-between'>
        <SkillsRow title='Languages' data={iconData.languages} />
        <SkillsRow title='Frameworks' data={iconData.frameworks} />
        <SkillsRow title='Runtimes' data={iconData.runtimes} />
        <SkillsRow title='Databases' data={iconData.databases} />
        <SkillsRow title='Tools' data={iconData.tools} />
      </Flex>
    </Flex>
  );
};
