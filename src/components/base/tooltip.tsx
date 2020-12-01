/** @jsxImportSource @emotion/react */
import {AnimatePresence, motion, MotionValue, useMotionValue, useSpring} from 'framer-motion';
import {
  Children,
  ReactElement,
  Ref,
  Fragment,
  createRef,
  forwardRef,
  useEffect,
  useState,
  MouseEvent,
} from 'react';
import {Portal} from 'src/components/base/portal';

type TooltipPortalProps = {
  label: string;
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
};

const TooltipPortal = forwardRef<HTMLDivElement, TooltipPortalProps>((props, ref) => {
  const springX = useSpring(props.mouseX, {stiffness: 300, damping: 25});
  const springY = useSpring(props.mouseY, {stiffness: 300, damping: 25});

  return (
    <Portal selector='body'>
      <div>
        <motion.div
          key='tooltip'
          ref={ref}
          style={{
            x: springX,
            y: springY,
          }}
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
          }}
        >
          {props.label}
        </motion.div>
      </div>
    </Portal>
  );
});

// type ReactElementWithRef = ReactElement & {ref?: Ref<any>};

type Props = {
  label: string;
  children: ReactElement;
};

export const Tooltip = ({label, children}: Props): JSX.Element => {
  const wrapperRef = createRef<HTMLDivElement>();
  const hoverRef = createRef<HTMLDivElement>();
  const mouseX = useMotionValue(-1);
  const mouseY = useMotionValue(-1);
  const [visible, setVisible] = useState(false);

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

      // console.log(rect, newX, newY);
    }

    mouseX.set(newX);
    mouseY.set(newY);
    setVisible(true);
  };

  // useEffect(() => {
  //   if (!wrapperRef.current) {
  //     return;
  //   }
  //   const {x, y} = wrapperRef.current.getBoundingClientRect();
  //   mouseX.set(x);
  //   mouseY.set(y);
  //   console.log('what');
  //   // console.log('what is this:', wrapperRef.current);
  // }, [wrapperRef.current]);

  return (
    <Fragment>
      <div ref={wrapperRef} onMouseLeave={() => setVisible(false)} onMouseMove={onMouseMove}>
        {Children.only(children)}
      </div>
      <AnimatePresence exitBeforeEnter={true}>
        {visible && <TooltipPortal label={label} ref={hoverRef} mouseX={mouseX} mouseY={mouseY} />}
      </AnimatePresence>
    </Fragment>
  );
};
