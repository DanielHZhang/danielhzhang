'use client';

import { AnimationControls, motion } from 'framer-motion';

type Props = {
  controls: AnimationControls;
};

export const ScrollReminder = (props: Props) => {
  return (
    <motion.div initial={{ opacity: 0, y: 0 }} animate={props.controls}>
      <svg viewBox="0 0 50 50" height="6.8rem" width="4rem" fill="#dac9a6">
        <path d="M36.885,32.535C36.712,32.206,36.372,32,36,32H26V0h-2v32H14c-0.372,0-0.712,0.206-0.885,0.535c-0.173,0.329-0.149,0.726,0.061,1.032l11,16C24.362,49.838,24.671,50,25,50c0.329,0,0.638-0.162,0.824-0.434l11-16C37.035,33.261,37.058,32.863,36.885,32.535z M24,34v11.78L15.901,34H24z M26,45.78V34h8.099L26,45.78z" />
      </svg>
    </motion.div>
  );
};
