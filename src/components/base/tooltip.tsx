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
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
};

const TooltipPortal = forwardRef<HTMLDivElement, TooltipPortalProps>((props, ref) => {
  const springX = useSpring(props.mouseX, {stiffness: 300, damping: 25});
  const springY = useSpring(props.mouseY, {stiffness: 300, damping: 25});

  useEffect(() => {
    return () => {
      console.log('unmounting');
    };
  }, []);

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
          animate={{opacity: 1}}
          exit={{opacity: 0}}
          css={{
            position: 'absolute',
            left: 0,
            top: 0,
            color: '#ffffff',
            backgroundColor: '#444444',
            zIndex: 10,
          }}
        >
          THIS IS THE HOVER
        </motion.div>
      </div>
    </Portal>
  );
});

type ReactElementWithRef = ReactElement & {ref?: Ref<any>};

type Props = {
  children: ReactElement;
};

export const Tooltip = ({children}: Props): JSX.Element => {
  const ref = createRef<HTMLDivElement>();
  const mouseX = useMotionValue(-1);
  const mouseY = useMotionValue(-1);
  const [visible, setVisible] = useState(false);

  const onMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    if (ref.current) {
      console.log('ref:', ref.current.getBoundingClientRect());
    }
    mouseX.set(event.nativeEvent.x - 20);
    mouseY.set(event.nativeEvent.y + 20);
    setVisible(true);
  };

  return (
    <Fragment>
      <div onMouseLeave={() => setVisible(false)} onMouseMove={onMouseMove}>
        {Children.only(children)}
      </div>
      <AnimatePresence exitBeforeEnter={true}>
        {visible && <TooltipPortal ref={ref} mouseX={mouseX} mouseY={mouseY} />}
      </AnimatePresence>
    </Fragment>
  );
};
