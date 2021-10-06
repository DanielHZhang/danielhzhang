import {Flex} from '@chakra-ui/react';
import {useState} from 'react';
import {Hero} from 'src/components/home';

export default function HomePage(): JSX.Element {
  const [finished, setFinished] = useState(false);
  return (
    <Flex h='100vh' w='100vw' bgColor='black'>
      <Flex justify='center' align='flex-start' grow={1} pt='10rem'>
        <Hero onAnimationEnd={() => setFinished(true)} />
      </Flex>
      {/* <AnimatePresence exitBeforeEnter={true}>
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
