/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import {motion, Variants} from 'framer-motion';
import {Flex} from 'src/components/base';

// const parentVariants: Variants = {
//   visible: {
//     transition: {
//       delay: 1,
//       duration: 2,
//       staggerChildren: 1,
//     },
//   },
// };

const downUpVariants: Variants = {
  hidden: {
    // opacity: 0,
    y: 100,
  },
  visible: {
    // opacity: 1,
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
    // opacity: 0,
    y: -100,
  },
  visible: {
    // opacity: 1,
    y: 0,
    transition: {
      delay: 1,
      duration: 1,
      staggerChildren: 1,
    },
  },
};

const fontSize = '18rem';
const firstName = 'DANIEL'.split('');
const lastName = 'ZHANG'.split('');

const NameWrapper = styled(Flex)`
  overflow: hidden;
  font-size: ${fontSize};
  line-height: ${fontSize};
`;

export const Hero = (): JSX.Element => {
  return (
    <Flex flow='column' css={{userSelect: 'none'}}>
      <NameWrapper>
        {firstName.map((letter, index) => (
          <motion.div
            key={index}
            initial='hidden'
            animate='visible'
            variants={index % 2 === 0 ? downUpVariants : upDownVariants}
          >
            {letter}
          </motion.div>
        ))}
      </NameWrapper>
      <NameWrapper>
        {lastName.map((letter, index) => (
          <motion.div
            key={index}
            initial='hidden'
            animate='visible'
            variants={index % 2 === 0 ? upDownVariants : downUpVariants}
          >
            {letter}
          </motion.div>
        ))}
      </NameWrapper>
      <Flex
        // mainAxis='center'
        // crossAxis='center'
        mainAxis='flex-start'
        css={{fontFamily: 'Inconsolata', fontSize: '3.2rem', lineHeight: '3.6rem', width: '100%'}}
      >
        <motion.div
          initial={{width: 0}}
          animate={{width: 'initial'}}
          transition={{delay: 1, duration: 10}}
          css={{whiteSpace: 'nowrap', overflow: 'hidden'}}
        >
          software engineer // entrepreneur
        </motion.div>
        <motion.div css={{height: '3.6rem', width: '1.6rem', backgroundColor: 'orange'}} />
      </Flex>
    </Flex>
  );
};
