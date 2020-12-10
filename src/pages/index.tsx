/** @jsxImportSource @emotion/react */
import {motion} from 'framer-motion';
import {useEffect, useRef, useState} from 'react';
import {Flex, Grid, GridItem, Subheading} from 'src/components/base';
import {HanziHero, Hero, ScrollReminder} from 'src/components/home';
import {IS_BROWSER} from 'src/config/constants';
import {useEventListener} from 'src/hooks';
// import {useDidMount} from 'src/hooks/use-did-mount';

export default function HomePage(): JSX.Element {
  const [next, setNext] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEventListener('window', 'scroll', () => {
    // Reached bottom of the page
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight) {
      // console.log('Bottom of page');
      setNext(true);
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
      <ScrollReminder />
    </Flex>
  );
}
