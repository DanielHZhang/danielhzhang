import {Box, Flex} from '@chakra-ui/react';
import {useAnimation} from 'framer-motion';
import {useEffect, useState} from 'react';
import {MotionBox} from 'src/components/base';
import {LinkItem, ScrollReminder} from 'src/components/home';
import {useDidMount, useEventListener} from 'src/hooks';
import {r} from 'src/utils';

const firstName = 'DANIEL'.split('');
const lastName = 'ZHANG'.split('');

type Props = {
  onAnimationEnd?: () => void;
};

export const Hero = (props: Props): JSX.Element => {
  const [scrollAnim, setScrollAnim] = useState(false);
  const heyControls = useAnimation();
  const nameControls = useAnimation();
  const descriptionControls = useAnimation();
  const arrowControls = useAnimation();

  useDidMount(() => {
    const run = async () => {
      await heyControls.start({
        x: 10,
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
      setScrollAnim(true);
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
      arrowControls.set({opacity: 0, y: 0});
    }
  }, [scrollAnim]);

  return (
    <Flex direction='column' userSelect='none'>
      <Box fontFamily='Playfair Display' fontSize='5rem' fontStyle='italic' color='blue.100'>
        <MotionBox initial={{x: -100, opacity: 0}} animate={heyControls}>
          Hey there! I'm
        </MotionBox>
      </Box>
      <Box fontFamily='Manrope' fontWeight={500} fontSize='18rem' lineHeight='18rem' color='white'>
        <Flex overflow='hidden'>
          {firstName.map((letter, index) => (
            <MotionBox
              as='span'
              key={index}
              custom={index}
              initial={{y: index % 2 === 0 ? 180 : -180}}
              animate={nameControls}
              display='inline-block'
            >
              {letter}
            </MotionBox>
          ))}
        </Flex>
        <Flex overflow='hidden'>
          {lastName.map((letter, index) => (
            <MotionBox
              as='span'
              key={index}
              custom={index}
              initial={{y: index % 2 === 0 ? -180 : 180}}
              animate={nameControls}
              display='inline-block'
            >
              {letter}
            </MotionBox>
          ))}
        </Flex>
      </Box>
      <Box
        fontSize='2rem'
        color='whiteAlpha.700'
        overflowWrap='break-word'
        maxW='609px'
        mt='1.6rem'
      >
        <MotionBox as='span' custom={0} initial={{opacity: 0}} animate={descriptionControls}>
          {r`I'm a self-taught software engineer from Toronto. I'm passionate about start-ups,
					 web technologies, and building the future.`}
        </MotionBox>
        <Flex mt='3.2rem' justifyContent='space-between'>
          <MotionBox custom={1} initial={{opacity: 0}} animate={descriptionControls}>
            <LinkItem title='GitHub' href='https://github.com/danielhzhang' icon='github' />
          </MotionBox>
          <MotionBox custom={2} initial={{opacity: 0}} animate={descriptionControls}>
            <LinkItem
              title='LinkedIn'
              href='https://linkedin.com/in/danielhzhang'
              icon='linkedin'
            />
          </MotionBox>
          <MotionBox custom={3} initial={{opacity: 0}} animate={descriptionControls}>
            <LinkItem title='Email' href='mailto:daniel100204@gmail.com' icon='mail' />
          </MotionBox>
          <MotionBox custom={4} initial={{opacity: 0}} animate={descriptionControls}>
            <LinkItem title='Resume' href='/resume.pdf' icon='file' />
          </MotionBox>
        </Flex>
      </Box>
      <Flex position='fixed' justify='center' bottom='7rem' left='50%' translateX='-50%'>
        <ScrollReminder controls={arrowControls} />
      </Flex>
    </Flex>
  );
};
