/** @jsxImportSource @emotion/react */
/* eslint-disable max-len */
import {motion} from 'framer-motion';
import {Subheading} from 'src/components/base';

export const ScrollReminder = (): JSX.Element => {
  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      css={{
        display: 'flex',
        position: 'fixed',
        bottom: '3.2rem',
        left: '3.6rem',
        transformOrigin: 'top left',
        transform: 'rotate(-90deg)',
        userSelect: 'none',
        pointerEvents: 'none',
      }}
    >
      <motion.div
        initial={{opacity: 1, x: 0}}
        animate={{opacity: 0.5, x: -32}}
        transition={{
          ease: 'easeInOut',
          duration: 1.5,
          repeat: Infinity,
          repeatType: 'mirror',
        }}
      >
        <svg
          viewBox='0 0 50 50'
          css={{
            height: '2rem',
            width: '4.8rem',
            fill: 'var(--font-color-heading-secondary)',
            marginRight: '0.8rem',
          }}
        >
          <g transform='rotate(90) scale(1.95) translate(-12,-38)'>
            <path d='M36.885,32.535C36.712,32.206,36.372,32,36,32H26V0h-2v32H14c-0.372,0-0.712,0.206-0.885,0.535c-0.173,0.329-0.149,0.726,0.061,1.032l11,16C24.362,49.838,24.671,50,25,50c0.329,0,0.638-0.162,0.824-0.434l11-16C37.035,33.261,37.058,32.863,36.885,32.535z M24,34v11.78L15.901,34H24z M26,45.78V34h8.099L26,45.78z' />
          </g>
        </svg>
      </motion.div>
      <Subheading>SCROLL TO SEE MORE</Subheading>
    </motion.div>
  );
};
