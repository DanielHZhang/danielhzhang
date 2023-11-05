'use client';

import { LinkItem, ScrollReminder } from '@/components/home';
import { useDidMount, useEventListener } from '@/hooks';
import { r } from '@/utils';
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';

const firstName = 'Daniel'.split('');
const lastName = 'Zhang'.split('');

type Props = {
  onAnimationEnd?: () => void;
};

export const Hero = (props: Props) => {
  const [scrollAnim, setScrollAnim] = useState(false);
  const heyControls = useAnimation();
  const nameControls = useAnimation();
  const descriptionControls = useAnimation();
  const arrowControls = useAnimation();

  useDidMount(() => {
    const run = async () => {
      await heyControls.start({
        x: 4,
        opacity: 1,
        transition: {
          delay: 1,
          duration: 0.5,
        },
      });
      await nameControls.start((i) => ({
        y: 0,
        transition: {
          ease: 'anticipate',
          delay: 0.1 * i,
          duration: 1,
        },
      }));
      await descriptionControls.start((i) => ({
        opacity: 1,
        transition: {
          ease: 'easeIn',
          delay: 0.1 * i,
          duration: 1,
        },
      }));
      if (window.scrollY < 20) {
        setScrollAnim(true);
      }
      props.onAnimationEnd?.();
    };
    run();
  });

  useEventListener('window', 'scroll', () => {
    if (window.scrollY > 20) {
      setScrollAnim(false);
    } else {
      setScrollAnim(true);
    }
  });

  useEffect(() => {
    if (scrollAnim) {
      arrowControls.start({
        opacity: 0.5,
        y: 32,
        transition: {
          ease: 'easeInOut',
          duration: 1.5,
          repeat: Infinity,
          repeatType: 'mirror' as const,
        },
      });
    } else {
      arrowControls.stop();
      arrowControls.set({ opacity: 0, y: 0 });
    }
  }, [scrollAnim, arrowControls]);

  return (
    <div className="flex flex-col select-none mx-4 sm:mx-6 md:mx-8 lg:mx-0">
      <div className="text-4xl sm:text-5xl lg:text-6xl text-white text-opacity-80">
        <motion.div initial={{ x: -100, opacity: 0 }} animate={heyControls}>
          {"Hey there! I'm"}
        </motion.div>
      </div>

      {/* <Box fontFamily='Josefin Sans' fontSize={['3.2rem', null, '4.2rem']} color='whiteAlpha.800'>
      </Box> */}

      <div className="font-manrope text-blue-100 font-medium text-9xl sm:text-10xl md:text-11xl lg:text-12xl leading-48 sm:leading-56 md:leading-none lg:leading-72">
        {/* <Box
        fontFamily="Manrope"
        color="blue.100"
        fontWeight={500}
        fontSize={['9rem', '10rem', null, '11rem', '12rem']}
        lineHeight={['12rem', '14rem', null, '18rem']}
      > */}
        {/* <SimpleGrid columns={[1, null, null, 2]}> */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="flex overflow-hidden mr-12">
            {firstName.map((letter, index) => (
              <motion.span
                className="inline-block"
                key={index}
                custom={index}
                initial={{ y: index % 2 === 0 ? 180 : -180 }}
                animate={nameControls}
              >
                {letter}
              </motion.span>
            ))}
          </div>
          <div className="flex overflow-hidden">
            {lastName.map((letter, index) => (
              <motion.span
                className="inline-block"
                key={index}
                custom={index}
                initial={{ y: index % 2 === 0 ? -180 : 180 }}
                animate={nameControls}
              >
                {letter}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
      {/* <Box
        fontSize="2rem"
        color="whiteAlpha.700"
        overflowWrap="break-word"
        maxW={[null, null, null, '742px']}
        pr={['2.4rem', null]}
        mt="1.6rem"
      > */}
      <div className="text-2xl text-white text-opacity-70 break-words max-w-none lg:max-w-7xl pr-6 sm:pr-0 mt-4">
        <motion.span custom={0} initial={{ opacity: 0 }} animate={descriptionControls}>
          {r`I'm a self-taught software engineer from Toronto. I'm passionate about start-ups,
					 web technologies, and building the future.`}
        </motion.span>
        {/* <SimpleGrid
          mt={['3rem', null, '6rem']}
          templateColumns={['repeat(2,minmax(0,1fr))', null, null, 'repeat(4,auto)']}
          justifyContent="space-between"
        > */}
        <div className="mt-12 md:mt-24 lg:mt-36 grid grid-cols-2 md:grid-cols-none lg:grid-cols-4 gap-x-4">
          <motion.div custom={1} initial={{ opacity: 0 }} animate={descriptionControls}>
            <LinkItem title="GitHub" href="https://github.com/danielhzhang" icon="github" />
          </motion.div>
          <motion.div custom={2} initial={{ opacity: 0 }} animate={descriptionControls}>
            <LinkItem title="LinkedIn" href="https://linkedin.com/in/danielhzhang" icon="linkedin" />
          </motion.div>
          <motion.div custom={3} initial={{ opacity: 0 }} animate={descriptionControls}>
            <LinkItem title="Email" href="mailto:me@danielhzhang.com" icon="mail" />
          </motion.div>
          <motion.div custom={4} initial={{ opacity: 0 }} animate={descriptionControls}>
            <LinkItem title="Resume" href="/resume.pdf" icon="file" />
          </motion.div>
        </div>
      </div>
      {/* < position="fixed" justify="center" bottom="7rem" left="50%" translateX="-50%"> */}
      <div className="fixed flex justify-center bottom-28 left-1/2 transform -translate-x-1/2">
        <ScrollReminder controls={arrowControls} />
      </div>
    </div>
  );
};
