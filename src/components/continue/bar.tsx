/** @jsxImportSource @emotion/react */
import {motion} from 'framer-motion';

type Origin = {
  bottom?: string | number;
  top?: string | number;
  left?: string | number;
  right?: string | number;
};

type Props = {
  type: 'vertical' | 'horizontal';
  length?: string;
  origin: Origin;
  color: string;
};

export const Bar = ({length = '100%', type, origin, color}: Props): JSX.Element => {
  return (
    <motion.div
      variants={{
        hidden: {
          opacity: 0,
          [type === 'horizontal' ? 'width' : 'height']: 0,
        },
        visible: {
          opacity: 1,
          [type === 'horizontal' ? 'width' : 'height']: length,
          transition: {
            duration: 0.8,
            ease: 'easeInOut',
          },
        },
      }}
      css={{
        backgroundColor: color,
        position: 'absolute',
        [type === 'horizontal' ? 'height' : 'width']: 4,
        ...origin,
      }}
    />
  );
};
