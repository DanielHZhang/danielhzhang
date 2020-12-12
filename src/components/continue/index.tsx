/** @jsxImportSource @emotion/react */
import {motion} from 'framer-motion';
import {Bar} from 'src/components/continue/bar';

export const ContinueNext = (): JSX.Element => {
  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      css={{position: 'fixed', top: 20, left: 20, bottom: 20, right: 20}}
    >
      <motion.div
        key='heading'
        css={{position: 'fixed', bottom: 20, left: '50%', transform: 'translateX(-50%)'}}
      >
        hold to continue
      </motion.div>
      <div css={{position: 'relative', width: '100%', height: '100%'}}>
        <Bar type='horizontal' end='40%' origin={{bottom: '0', right: '60%'}} />
        <motion.div
          initial={{width: 0}}
          animate={{width: '40%'}}
          css={{
            position: 'absolute',
            bottom: 0,
            right: '60%',
            backgroundColor: '#fff',
            height: '2px',
          }}
        />
        <motion.div
          initial={{height: 0}}
          animate={{height: '100%'}}
          css={{
            position: 'absolute',
            left: 0,
            bottom: 0,
            backgroundColor: '#fff',
            width: '2px',
          }}
        />
        <motion.div
          initial={{width: 0}}
          animate={{width: '100%'}}
          css={{
            position: 'absolute',
            left: 0,
            top: 0,
            backgroundColor: '#fff',
            height: '2px',
          }}
        />
        <motion.div
          initial={{height: 0}}
          animate={{height: '100%'}}
          css={{
            position: 'absolute',
            right: 0,
            top: 0,
            backgroundColor: '#fff',
            width: '2px',
          }}
        />
        <motion.div
          initial={{width: 0}}
          animate={{width: '40%'}}
          css={{
            position: 'absolute',
            bottom: 0,
            right: 0,
            backgroundColor: '#fff',
            height: '2px',
          }}
        />
      </div>
    </motion.div>
  );
};
