import {Flex, Grid} from '@chakra-ui/react';
import {SectionTitle} from 'src/components/common';
import {SkillsRow} from 'src/components/skills/row';
import {skills} from 'src/content';

export const Skills = (): JSX.Element => {
  return (
    <Flex direction='column'>
      <SectionTitle heading='Skills' subheading='TECHNOLOGIES I HAVE USED EXTENSIVELY' />
      <Grid
        templateColumns={{
          base: 'repeat(auto-fit, minmax(15rem, 1fr))', // auto-fit to wrap columns on small screens
          xl: 'repeat(5, 15rem)', // use justify space-between for large screens
        }}
        justifyContent='space-between'
      >
        <SkillsRow title='Languages' data={skills.languages} />
        <SkillsRow title='Frameworks' data={skills.frameworks} />
        <SkillsRow title='Runtimes' data={skills.runtimes} />
        <SkillsRow title='Databases' data={skills.databases} />
        <SkillsRow title='Tools' data={skills.tools} />
      </Grid>
    </Flex>
  );
};
