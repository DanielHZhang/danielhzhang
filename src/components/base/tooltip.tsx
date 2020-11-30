/** @jsxImportSource @emotion/react */
import {AnimatePresence, motion, MotionValue, useMotionValue, useTransform} from 'framer-motion';
import {
  ReactNode,
  Children,
  FC,
  ReactElement,
  Ref,
  createRef,
  forwardRef,
  useState,
  Fragment,
} from 'react';
import {createPortal} from 'react-dom';
import {Portal} from 'src/components/base/portal';
import {useAnimationFrame} from 'src/hooks';

type TooltipPortalProps = {
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
};

const TooltipPortal = forwardRef<HTMLDivElement, TooltipPortalProps>((props, ref) => {
  // const x = useTransform(props.mouseX, [0, 400], [45, -45]);
  // useAnimationFrame(() => {
  //   // console.log(props.mouseX.get());
  //   //
  // }, true);
  // console.log('motion value:', props.mouseX, props.mouseX.get());
  // props.mouseX.

  return (
    <Portal selector='body'>
      {/* <div css={{position: 'fixed'}}> */}
      <motion.div
        ref={ref}
        style={{
          x: props.mouseX,
          y: props.mouseY,
        }}
        css={{
          position: 'absolute',
          left: 0,
          top: 0,
          // left: 0,
          // top: 0,
          color: '#ffffff',
          backgroundColor: '#444444',
          zIndex: 10,
        }}
      >
        THIS IS THE HOVER
      </motion.div>
      {/* </div> */}
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

  // const onMouseMove = (event) => {
  //   console.log('mouse', event);
  //   console.log('got ref:', ref.current);
  //   if (ref.current) {
  //     window.requestAnimationFrame(() => {
  //       //
  //     });
  //   }
  // };
  // console.log('mousex:', mouseX.;
  console.log('visibility:', visible);

  return (
    <Fragment>
      <div
        onMouseLeave={() => {
          mouseX.set(-1);
          mouseY.set(-1);
          setVisible(false);
        }}
        onMouseMove={(event) => {
          mouseX.set(event.nativeEvent.x - 20);
          mouseY.set(event.nativeEvent.y + 20);
          setVisible(true);
        }}
      >
        {Children.only(children)}
      </div>
      <AnimatePresence>
        {visible && <TooltipPortal ref={ref} mouseX={mouseX} mouseY={mouseY} />}
      </AnimatePresence>
    </Fragment>
  );
};
