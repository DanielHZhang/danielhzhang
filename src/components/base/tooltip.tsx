/** @jsxImportSource @emotion/react */
import {AnimatePresence, motion, useSpring} from 'framer-motion';
import {Children, createRef, Fragment, MouseEvent, ReactElement, useState} from 'react';
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
    mouseX.current = mouseX.prev = event.pageX + 10;
    // @ts-ignore
    mouseY.current = mouseY.prev = event.pageY + 10;
    setVisible(true);
  };

  const onMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    let newX = event.pageX + 20;
    let newY = event.pageY + 20;
    if (hoverRef.current) {
      const rect = hoverRef.current.getBoundingClientRect();
      // Tooltip exceeds right of screen -> move to bottom left
      if (rect.right > window.innerWidth) {
        newX = event.pageX - rect.width - 20;
      }
      // Tooltip exceeds bottom of screen -> move to top right
      if (rect.bottom > window.innerHeight) {
        newY = event.pageY - 20;
      }
    }
    mouseX.set(newX);
    mouseY.set(newY);
  };

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
                  backgroundColor: 'rgba(50, 50, 54, 0.95)',
                  borderRadius: '6px',
                  color: 'var(--font-color-link)',
                  padding: '0.6rem 1rem',
                  pointerEvents: 'none',
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  zIndex: 10,
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
