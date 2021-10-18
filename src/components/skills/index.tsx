import {Flex} from '@chakra-ui/react';
import {SkillsRow} from 'src/components/skills/row';
import {PageTitle} from 'src/components/title';
import {skills} from 'src/content';

export const Skills = (): JSX.Element => {
  return (
    <Flex direction='column'>
      <PageTitle heading='Skills' subheading='TECHNOLOGIES I HAVE USED EXTENSIVELY' />
      <Flex justify='space-between'>
        <SkillsRow title='Languages' data={skills.languages} />
        <SkillsRow title='Frameworks' data={skills.frameworks} />
        <SkillsRow title='Runtimes' data={skills.runtimes} />
        <SkillsRow title='Databases' data={skills.databases} />
        <SkillsRow title='Tools' data={skills.tools} />
      </Flex>
    </Flex>
  );
};
