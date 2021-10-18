import {Flex} from '@chakra-ui/react';
import {SectionTitle} from 'src/components/common';
import {SkillsRow} from 'src/components/skills/row';
import {skills} from 'src/content';

export const Skills = (): JSX.Element => {
  return (
    <Flex direction='column'>
      <SectionTitle heading='Skills' subheading='TECHNOLOGIES I HAVE USED EXTENSIVELY' />
      <Flex justify='space-between' wrap='wrap'>
        <SkillsRow title='Languages' data={skills.languages} />
        <SkillsRow title='Frameworks' data={skills.frameworks} />
        <SkillsRow title='Runtimes' data={skills.runtimes} />
        <SkillsRow title='Databases' data={skills.databases} />
        <SkillsRow title='Tools' data={skills.tools} />
      </Flex>
    </Flex>
  );
};
