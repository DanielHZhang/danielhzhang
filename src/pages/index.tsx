import {Flex, Stack} from '@chakra-ui/react';
import {useState} from 'react';
import {Hero} from 'src/components/home';
import {Skills} from 'src/components/skills';

export default function HomePage(): JSX.Element {
  const [finished, setFinished] = useState(false);
  return (
    <Flex direction='column' bgColor='black'>
      <Flex h='100vh' w='100vw' justify='center' align='flex-start' grow={1} pt='10rem'>
        <Hero onAnimationEnd={() => setFinished(true)} />
      </Flex>
      {finished && (
        <Stack direction='column' spacing='4rem' mt='4rem' px='12rem'>
          <Skills />
        </Stack>
      )}

      {/*
        {next ? (
          <ContinueNext key='a' href='/about' />
        ) : (
          <Fragment key='b'>
            <PageNavigator />
            <ScrollReminder />
          </Fragment>
        )}
      </AnimatePresence> */}
    </Flex>
  );
}
