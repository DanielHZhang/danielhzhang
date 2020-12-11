/** @jsxImportSource @emotion/react */
import {motion} from 'framer-motion';

export const ContinueNext = (): JSX.Element => {
  return (
    <motion.div
      key='continue'
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      // css={{position: 'fixed', top: 20, bottom: 20, right: 20, left: 20}}
      css={{position: 'fixed', top: 0, left: 0}}
    >
      <motion.div
        key='heading'
        css={{position: 'fixed', bottom: 20, left: '50%', transform: 'translateX(-50%)'}}
      >
        hold to continue
      </motion.div>
      <motion.div
        initial={{width: 0}}
        animate={{width: 1000}}
        css={{position: 'fixed', top: 20, left: 20, backgroundColor: '#fff', height: '2px'}}
      />
    </motion.div>
  );
};
