import {Flex, Stack} from '@chakra-ui/react';
import {useState} from 'react';
import {Hero} from 'src/components/home';
import {Projects} from 'src/components/projects';
import {Skills} from 'src/components/skills';

export default function HomePage(): JSX.Element {
  const [finished, setFinished] = useState(false);
  return (
    <Flex direction='column' bgColor='black'>
      <Flex h='100vh' w='100vw' justify='center' align='flex-start' grow={1} pt='10rem'>
        <Hero onAnimationEnd={() => setFinished(true)} />
      </Flex>
      {finished && (
        <Stack direction='column' spacing='8rem' px='16rem'>
          <Skills />
          <Projects />
        </Stack>
      )}
    </Flex>
  );
}
