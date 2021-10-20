import {Flex, SimpleGrid, useBreakpoint} from '@chakra-ui/react';
import {SectionTitle} from 'src/components/common';
import {SkillsRow} from 'src/components/skills/row';
import {skills} from 'src/content';

export const Skills = (): JSX.Element => {
  const breakpoint = useBreakpoint();
  // const breakpoint = useBreakpointValue({lg: '3'});
  console.log(breakpoint);
  return (
    <Flex direction='column'>
      <SectionTitle heading='Skills' subheading='TECHNOLOGIES I HAVE USED EXTENSIVELY' />
      <SimpleGrid columns={5} spacingY='3.6rem' minChildWidth='15rem'>
        <SkillsRow title='Languages' data={skills.languages} />
        <SkillsRow title='Frameworks' data={skills.frameworks} />
        <SkillsRow title='Runtimes' data={skills.runtimes} />
        <SkillsRow title='Databases' data={skills.databases} />
        <SkillsRow title='Tools' data={skills.tools} />
      </SimpleGrid>
    </Flex>
  );
};
