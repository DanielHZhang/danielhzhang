import {Flex, Stack, useBreakpoint, useTheme} from '@chakra-ui/react';
import {useState} from 'react';
import {Hero} from 'src/components/home';
import {Projects} from 'src/components/projects';
import {Skills} from 'src/components/skills';

export default function HomePage(): JSX.Element {
  const breakpoint = useBreakpoint();
  console.log(breakpoint);
  const theme = useTheme();
  const [finished, setFinished] = useState(true); // TODO: change back to false
  return (
    <Flex direction='column' bgColor='black' minW={theme.__breakpoints?.asObject.sm}>
      <Flex
        h='100vh'
        w='100vw'
        align='flex-start'
        grow={1}
        justify={['flex-start', null, null, 'center']}
        pt={['14vh', null, null, '20vh']}
      >
        <Hero onAnimationEnd={() => setFinished(true)} />
      </Flex>
      {finished && (
        <Stack
          direction='column'
          spacing='8rem'
          px={['1rem', '2.4rem', '4rem', null, '16rem']}
          mb='8rem'
        >
          <Skills />
          <Projects />
        </Stack>
      )}
    </Flex>
  );
}
