/** @jsxImportSource @emotion/react */
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

const firstNameVariant1: Variants = {
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

const firstNameVariant2: Variants = {
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

export const Hero = (): JSX.Element => {
  return (
    <Flex flow='column' css={{userSelect: 'none'}}>
      <Flex css={{overflow: 'hidden', fontSize, height: fontSize, lineHeight: fontSize}}>
        <motion.div initial='hidden' animate='visible' variants={firstNameVariant1}>
          DAN
        </motion.div>
        <motion.div initial='hidden' animate='visible' variants={firstNameVariant2}>
          IEL
        </motion.div>
      </Flex>
      <Flex css={{overflow: 'hidden', fontSize, height: fontSize, lineHeight: fontSize}}>
        <motion.div initial='hidden' animate='visible' variants={firstNameVariant2}>
          ZHA
        </motion.div>
        <motion.div initial='hidden' animate='visible' variants={firstNameVariant1}>
          NG
        </motion.div>
      </Flex>
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
