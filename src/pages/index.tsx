/** @jsxImportSource @emotion/react */
import {AnimatePresence} from 'framer-motion';
import {Fragment, useState} from 'react';
import {Flex} from 'src/components/base';
import {ContinueNext} from 'src/components/continue';
import {HanziHero, Hero, ScrollReminder} from 'src/components/home';
import {PageNavigator} from 'src/components/home/navigator';
import {useEventListener} from 'src/hooks';

export default function HomePage(): JSX.Element {
  const [next, setNext] = useState(false);

  useEventListener('window', 'unload', () => {
    // Prevent browser from remembering previous scroll position
    // by tricking it to thinking we scrolled back to the top
    window.scrollTo(0, 0);
  });

  useEventListener('window', 'scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight) {
      setNext(true); // Reached bottom of the page
    } else {
      setNext(false);
    }
  });

  return (
    <Flex css={{height: '101vh', width: '100vw'}}>
      <Flex css={{position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%,-50%)'}}>
        <Hero />
        <HanziHero />
      </Flex>
      <AnimatePresence exitBeforeEnter={true}>
        {next ? (
          <ContinueNext key='a' />
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
