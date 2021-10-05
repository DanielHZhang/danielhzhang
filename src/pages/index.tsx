/** @jsxImportSource @emotion/react */
import {Flex} from '@chakra-ui/react';
import {AnimatePresence} from 'framer-motion';
import {Fragment, useState} from 'react';
// import {Flex} from 'src/components/base';
import {ContinueNext} from 'src/components/continue';
import {Hero, ScrollReminder} from 'src/components/home';
import {PageNavigator} from 'src/components/navigator';
import {useEventListener} from 'src/hooks';

export default function HomePage(): JSX.Element {
  const [next, setNext] = useState(false);

  useEventListener('window', 'unload', () => {
    // Prevent browser from remembering previous scroll position
    // by tricking it to thinking we scrolled back to the top
    window.scrollTo(0, 0);
  });

  useEventListener('window', 'scroll', () => {
    console.log(window.innerHeight + window.scrollY, document.body.scrollHeight);
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight) {
      setNext(true); // Reached bottom of the page
    } else {
      setNext(false);
    }
  });

  return (
    <Flex h='102vh' w='100vw' bgColor='black'>
      <Flex position='fixed' top='50%' left='50%' transform='translate(-50%, -50%)'>
        <Hero />
      </Flex>
      <AnimatePresence exitBeforeEnter={true}>
        {next ? (
          <ContinueNext key='a' href='/about' />
        ) : (
          <Fragment key='b'>
            <PageNavigator />
            <ScrollReminder />
          </Fragment>
        )}
      </AnimatePresence>
    </Flex>
  );
}
