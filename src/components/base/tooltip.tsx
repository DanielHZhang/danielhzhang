/** @jsxImportSource @emotion/react */
import {AnimatePresence, motion, useMotionValue, useSpring} from 'framer-motion';
import {Children, ReactElement, Fragment, createRef, useState, MouseEvent, useEffect} from 'react';
import {Portal} from 'src/components/base/portal';

type Props = {
  label: string;
  children: ReactElement;
};

export const Tooltip = ({label, children}: Props): JSX.Element => {
  const wrapperRef = createRef<HTMLDivElement>();
  const hoverRef = createRef<HTMLDivElement>();
  const mouseX = useSpring(0, {stiffness: 300, damping: 25});
  const mouseY = useSpring(0, {stiffness: 300, damping: 25});
  const [visible, setVisible] = useState(false);

  const onMouseEnter = (event: MouseEvent<HTMLDivElement>) => {
    // @ts-ignore
    mouseX.current = mouseX.prev = event.clientX;
    // @ts-ignore
    mouseY.current = mouseY.prev = event.clientY;
    setVisible(true);
  };

  const onMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    let newX = event.clientX + 20;
    let newY = event.clientY + 20;
    if (hoverRef.current) {
      const rect = hoverRef.current.getBoundingClientRect();
      // Tooltip exceeds right of screen -> move to bottom left
      if (rect.right > window.innerWidth) {
        newX = event.clientX - rect.width - 20;
      }
      // Tooltip exceeds bottom of screen -> move to top right
      if (rect.bottom > window.innerHeight) {
        newY = event.clientY - 20;
      }
    }
    mouseX.set(newX);
    mouseY.set(newY);
  };

  // useEffect(() => {
  //   setVisible(true);
  // }, [initial]);

  // useEffect(() => {
  //   if (wrapperRef.current) {
  //     const rect = wrapperRef.current.getBoundingClientRect();
  //     mouseX.set(rect.x, false);
  //     mouseY.set(rect.y, false);
  //   }
  // }, [wrapperRef.current]);

  // console.log(mouseX);

  // useEffect(() => {
  //   const unsubscribe = mouseX.onChange(() => {
  //     // console.log(
  //     //   'getting latest:',
  //     //   value,
  //     //   mouseX.get(),
  //     //   mouseX.getPrevious(),
  //     //   mouseX.getVelocity()
  //     // );
  //     // const velocity = Math.abs(mouseX.getVelocity());
  //     // if (velocity !== 0 && velocity < 10 && !visible) {
  //     //   console.log('setting visible:', mouseX.getVelocity());
  //     //   setVisible(true);
  //     // }
  //   });
  //   return () => {
  //     unsubscribe();
  //   };
  // }, []);

  return (
    <Fragment>
      <div
        ref={wrapperRef}
        onMouseLeave={() => setVisible(false)}
        onMouseEnter={onMouseEnter}
        onMouseMove={onMouseMove}
      >
        {Children.only(children)}
      </div>
      <AnimatePresence exitBeforeEnter={true}>
        {visible && (
          <Portal selector='body'>
            <div>
              <motion.div
                key='tooltip'
                ref={hoverRef}
                style={{x: mouseX, y: mouseY}}
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
                css={{
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  color: '#f0f0f0',
                  backgroundColor: 'rgba(50, 50, 54, 0.95)',
                  borderRadius: '6px',
                  padding: '0.6rem 1rem',
                  zIndex: 10,
                  pointerEvents: 'none',
                }}
              >
                {label}
              </motion.div>
            </div>
          </Portal>
        )}
      </AnimatePresence>
    </Fragment>
  );
};
