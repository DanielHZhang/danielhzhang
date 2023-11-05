import {Flex, Stack, useTheme} from '@chakra-ui/react';
import {useState} from 'react';
import {Hero} from 'src/components/home';
import {Projects} from 'src/components/projects';
import {Skills} from 'src/components/skills';
import {IS_BROWSER} from 'src/config/constants';

export default function HomePage(): JSX.Element {
  const theme = useTheme();
  const [isContentShowing, setIsContentShowing] = useState(() => {
    if (IS_BROWSER && !localStorage.getItem('new-visitor')) {
      localStorage.setItem('new-visitor', 'true');
      return false;
    }
    return true;
  });

  return (
    <Flex direction='column' bgColor='black' minW={theme.__breakpoints?.asObject.sm}>
      <Flex
        h='100vh'
        w='100vw'
        align='flex-start'
        grow={1}
        justify={['flex-start', null, null, 'center']}
        pt={['12vh', null, null, '20vh']}
      >
        <Hero onAnimationEnd={() => setIsContentShowing(true)} />
      </Flex>
      {isContentShowing && (
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
