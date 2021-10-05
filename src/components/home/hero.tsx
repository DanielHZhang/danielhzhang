import {Box, Flex, Text} from '@chakra-ui/react';
import {useAnimation, Variants} from 'framer-motion';
import {MotionBox} from 'src/components/base/box';
import {useDidMount} from 'src/hooks';

const firstName = 'DANIEL'.split('');
const lastName = 'ZHANG'.split('');

export const Hero = (): JSX.Element => {
  const heyControls = useAnimation();
  const nameControls = useAnimation();

  useDidMount(() => {
    const run = async () => {
      await heyControls.start({
        x: 10,
        opacity: 1,
        transition: {
          type: 'spring',
          delay: 1,
          duration: 0.8,
        },
      });
      await nameControls.start((i) => ({
        y: 0,
        transition: {
          delay: 0.3 * i,
          duration: 2,
        },
      }));
    };
    run();
  });

  return (
    <Flex flexFlow='column' userSelect='none'>
      <Box fontFamily='Playfair Display' fontSize='5rem' fontStyle='italic' color='white'>
        <MotionBox initial={{x: -100, opacity: 0}} animate={heyControls}>
          Hey there! I'm
        </MotionBox>
      </Box>
      <Box fontFamily='Manrope' fontWeight={500} fontSize='18rem' lineHeight='18rem' color='white'>
        <Text as={Flex} overflow='hidden'>
          {firstName.map((letter, index) => (
            <MotionBox
              as='span'
              key={index}
              custom={index}
              initial={{y: index % 2 === 0 ? 200 : -200}}
              animate={nameControls}
              display='inline-block'
            >
              {letter}
            </MotionBox>
          ))}
        </Text>
        <Text as={Flex} overflow='hidden'>
          {lastName.map((letter, index) => (
            <MotionBox
              as='span'
              key={index}
              custom={index}
              initial={{y: index % 2 === 0 ? -200 : 200}}
              animate={nameControls}
              display='inline-block'
            >
              {letter}
            </MotionBox>
          ))}
        </Text>
      </Box>
      {/* <Flex
          mainAxis='flex-start'
					fontFamily='Inconsolata'
					fontSize='3.2rem'
					lineHeight='3.6rem'
					width='100%'
					color='white'
        >
          <motion.div
            initial={{width: 0}}
            animate={{width: 'initial'}}
            transition={{delay: 1, duration: 10}}
            // css={{whiteSpace: 'nowrap', overflow: 'hidden'}}
          >
            software engineer // entrepreneur
          </motion.div>
          <motion.div css={{height: '3.6rem', width: '1.6rem', backgroundColor: 'orange'}} />
        </Flex> */}
    </Flex>
  );
};
