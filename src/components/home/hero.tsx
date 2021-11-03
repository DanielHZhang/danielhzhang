import {Box, Flex, SimpleGrid} from '@chakra-ui/react';
import {useAnimation} from 'framer-motion';
import {useEffect, useState} from 'react';
import {MotionBox} from 'src/components/base';
import {LinkItem, ScrollReminder} from 'src/components/home';
import {useDidMount, useEventListener} from 'src/hooks';
import {r} from 'src/utils';

const firstName = 'Daniel'.split('');
const lastName = 'Zhang'.split('');

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
      arrowControls.set({opacity: 0, y: 0});
    }
  }, [scrollAnim]);

  return (
    <Flex direction='column' userSelect='none' mx={['1rem', '2.4rem', '4rem', null]}>
      <Box fontFamily='Josefin Sans' fontSize={['3.2rem', null, '4.2rem']} color='whiteAlpha.800'>
        <MotionBox initial={{x: -100, opacity: 0}} animate={heyControls}>
          Hey there! I'm
        </MotionBox>
      </Box>
      <Box
        fontFamily='Manrope'
        color='blue.100'
        fontWeight={500}
        fontSize={['9rem', '10rem', null, '11rem', '12rem']}
        lineHeight={['12rem', '14rem', null, '18rem']}
      >
        <SimpleGrid columns={[1, null, null, 2]}>
          <Flex overflow='hidden' mr={[null, null, null, null, '3rem']}>
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
        </SimpleGrid>
      </Box>
      <Box
        fontSize='2rem'
        color='whiteAlpha.700'
        overflowWrap='break-word'
        maxW={[null, null, null, '742px']}
        pr={['2.4rem', null]}
        mt='1.6rem'
      >
        <MotionBox as='span' custom={0} initial={{opacity: 0}} animate={descriptionControls}>
          {r`I'm a self-taught software engineer from Toronto. I'm passionate about start-ups,
					 web technologies, and building the future.`}
        </MotionBox>
        <SimpleGrid
          mt={['3rem', null, '6rem']}
          templateColumns={['repeat(2,minmax(0,1fr))', null, null, 'repeat(4,auto)']}
          justifyContent='space-between'
        >
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
            <LinkItem title='Email' href='mailto:me@danielhzhang.com' icon='mail' />
          </MotionBox>
          <MotionBox custom={4} initial={{opacity: 0}} animate={descriptionControls}>
            <LinkItem title='Resume' href='/resume.pdf' icon='file' />
          </MotionBox>
        </SimpleGrid>
      </Box>
      <Flex position='fixed' justify='center' bottom='7rem' left='50%' translateX='-50%'>
        <ScrollReminder controls={arrowControls} />
      </Flex>
    </Flex>
  );
};
