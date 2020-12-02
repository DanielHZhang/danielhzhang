/** @jsxImportSource @emotion/react */
import {AnimatePresence, motion, useMotionValue, useSpring, useTransform} from 'framer-motion';
import {useEffect, useState} from 'react';
import {Portal} from 'src/components/base';

export const Cursor = (): JSX.Element | null => {
  const [visible, setVisible] = useState(false);
  const springX = useSpring(0, {stiffness: 300, damping: 25});
  const springY = useSpring(0, {stiffness: 300, damping: 25});
  const velocity = useMotionValue(0);
  const diameter = useSpring(useTransform(velocity, [-1000, 0, 1000], [30, 60, 30]), {
    stiffness: 300,
    damping: 25,
  });

  useEffect(() => {
    let timer: number;
    // Set initial position on mount to center of screen
    springX.set(window.innerWidth / 2);
    springY.set(window.innerHeight / 2);
    const mouseHandler = (event: MouseEvent) => {
      if (!visible) {
        setVisible(true);
      }
      window.clearTimeout(timer);
      timer = window.setTimeout(() => {
        velocity.set(0);
        springX.set(event.clientX - 30);
        springY.set(event.clientY - 30);
      }, 50);
      // Center the new position of the cursor
      velocity.set(Math.max(Math.abs(springX.getVelocity()), Math.abs(springY.getVelocity())));
      springX.set(event.clientX - diameter.get() / 2);
      springY.set(event.clientY - diameter.get() / 2);
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
              style={{x: springX, y: springY, width: diameter, height: diameter}}
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
                pointerEvents: 'none',
              }}
            />
          </div>
        </Portal>
      )}
    </AnimatePresence>
  );
};
