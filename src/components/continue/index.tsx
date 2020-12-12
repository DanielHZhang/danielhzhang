/** @jsxImportSource @emotion/react */
import {motion, Variants} from 'framer-motion';
import {Bar} from 'src/components/continue/bar';

const containerVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      when: 'beforeChildren',
    },
  },
};

export const ContinueNext = (): JSX.Element => {
  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      css={{position: 'fixed', top: '3.2rem', left: '3.2rem', bottom: '3.2rem', right: '3.2rem'}}
    >
      <motion.div
        initial={{opacity: 0.5, scale: 1, translateX: '-50%'}}
        animate={{opacity: 1, scale: 1.2, translateX: '-50%'}}
        transition={{ease: 'easeIn', duration: 2.2}}
        css={{position: 'fixed', bottom: 20, left: '50%'}}
      >
        <span css={{fontSize: '1.8rem'}}>hold to continue</span>
      </motion.div>
      <motion.div
        initial='hidden'
        animate='visible'
        variants={containerVariants}
        onAnimationComplete={() => console.log('ended')}
        css={{position: 'relative', width: '100%', height: '100%'}}
      >
        <Bar type='horizontal' origin={{bottom: 0, right: '60%'}} length='40%' color='#D0104C' />
        <Bar type='vertical' origin={{bottom: 0, left: 0}} color='#DB4D6D' />
        <Bar type='horizontal' origin={{top: 0, left: 0}} color='#E16B8C' />
        <Bar type='vertical' origin={{top: 0, right: 0}} color='#F596AA' />
        <Bar type='horizontal' origin={{bottom: 0, right: 0}} length='40%' color='#DC9FB4' />
      </motion.div>
    </motion.div>
  );
};
