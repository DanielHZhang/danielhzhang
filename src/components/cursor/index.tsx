/** @jsxImportSource @emotion/react */
import {AnimatePresence, motion, useMotionValue, useSpring} from 'framer-motion';
import {useEffect, useState} from 'react';
import {Portal} from 'src/components/base';

const diameter = 60;

export const Cursor = (): JSX.Element | null => {
  const [visible, setVisible] = useState(false);
  // const mouseX = useMotionValue(-1);
  // const mouseY = useMotionValue(-1);
  const springX = useSpring(0, {stiffness: 300, damping: 25});
  const springY = useSpring(0, {stiffness: 300, damping: 25});

  useEffect(() => {
    springX.set(window.innerWidth / 2);
    springY.set(window.innerHeight / 2);
    const mouseHandler = (event: MouseEvent) => {
      if (!visible) {
        setVisible(true);
      }
      springX.set(event.clientX - diameter / 2);
      springY.set(event.clientY - diameter / 2);
    };
    window.addEventListener('mousemove', mouseHandler);
    return () => {
      window.removeEventListener('mousemove', mouseHandler);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <Portal selector='body'>
          <div>
            <motion.div
              key='cursor'
              style={{x: springX, y: springY}}
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              exit={{opacity: 0}}
              css={{
                background: 'none',
                position: 'absolute',
                top: 0,
                left: 0,
                border: '2px solid #fff',
                borderRadius: '50%',
                width: diameter,
                height: diameter,
                pointerEvents: 'none',
              }}
            />
          </div>
        </Portal>
      )}
    </AnimatePresence>
  );
};
