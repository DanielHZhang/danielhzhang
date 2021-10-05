import {Box, Flex, Text} from '@chakra-ui/react';
import {motion, Variants} from 'framer-motion';
import {MotionBox} from 'src/components/base/box';
import {Hanzi} from 'src/components/home/hanzi';

const downUpVariants: Variants = {
  hidden: {
    y: 300,
  },
  visible: {
    y: 0,
    transition: {
      delay: 1,
      duration: 1,
      staggerChildren: 1,
    },
  },
};

const upDownVariants: Variants = {
  hidden: {
    y: -300,
  },
  visible: {
    y: 0,
    transition: {
      delay: 1,
      duration: 1,
      staggerChildren: 1,
    },
  },
};

const firstName = 'DANIEL'.split('');
const lastName = 'ZHANG'.split('');

export const Hero = (): JSX.Element => {
  return (
    <Flex>
      <Flex flexFlow='column' userSelect='none'>
        <Box
          fontFamily='Manrope'
          fontWeight={500}
          fontSize='18rem'
          lineHeight='18rem'
          color='white'
        >
          <Text as={Flex} overflow='hidden'>
            {firstName.map((letter, index) => (
              <MotionBox
                as='span'
                key={index}
                initial='hidden'
                animate='visible'
                variants={(index & 1) === 0 ? downUpVariants : upDownVariants}
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
                initial='hidden'
                animate='visible'
                variants={(index & 1) === 0 ? upDownVariants : downUpVariants}
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
      {/* <Flex flexFlow='column'>
        <Hanzi type='zhang' />
        <Hanzi type='hai' />
        <Hanzi type='yao' />
      </Flex> */}
    </Flex>
  );
};
