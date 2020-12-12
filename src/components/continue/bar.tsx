/** @jsxImportSource @emotion/react */
import {motion} from 'framer-motion';

type Origin = {
  bottom?: string;
  top?: string;
  left?: string;
  right?: string;
};

type Props = {
  type: 'vertical' | 'horizontal';
  end: string;
  origin: Origin;
};

export const Bar = ({end, type, origin}: Props): JSX.Element => {
  return (
    <motion.div
      initial={{[type === 'horizontal' ? 'width' : 'height']: 0}}
      animate={{[type === 'horizontal' ? 'width' : 'height']: end}}
      css={{
        backgroundColor: '#fff',
        position: 'absolute',
        [type === 'horizontal' ? 'height' : 'width']: 2,
        ...origin,
      }}
    />
  );
};
