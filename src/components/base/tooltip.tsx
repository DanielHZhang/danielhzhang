/** @jsxImportSource @emotion/react */
import {MotionValue, useMotionValue} from 'framer-motion';
import {ReactNode, Children, FC, ReactElement, Ref, createRef, forwardRef, useState} from 'react';
import {createPortal} from 'react-dom';
import {Portal} from 'src/components/base/portal';

type TooltipPortalProps = {
  mouseX: MotionValue<number | null>;
};

const TooltipPortal = forwardRef<HTMLDivElement, TooltipPortalProps>((props, ref) => {
  return (
    <Portal selector='body'>
      <div>
        <div
          ref={ref}
          css={{
            position: 'absolute',
            left: 0,
            top: 0,
            color: '#ffffff',
            backgroundColor: '#444444',
          }}
        >
          THIS IS THE HOVER
        </div>
      </div>
    </Portal>
  );
});

type ReactElementWithRef = ReactElement & {ref?: Ref<any>};

type Props = {
  children: ReactElement;
};

export const Tooltip = ({children}: Props): JSX.Element => {
  const mouseX = useMotionValue<number | null>(null);
  // const [visible, setVisible] = useState(false);
  const ref = createRef<HTMLDivElement>();
  // console.log('what is child:', children);
  const child = Children.only(children) as ReactElementWithRef;

  // const onMouseMove = (event) => {
  //   console.log('mouse', event);
  //   console.log('got ref:', ref.current);
  //   if (ref.current) {
  //     window.requestAnimationFrame(() => {
  //       //
  //     });
  //   }
  // };

  return (
    <div
      // onMouseEnter={() => setVisible(true)}
      // onMouseLeave={() => setVisible(false)}
      onMouseLeave={() => mouseX.set(null)}
      onMouseMove={(event) => mouseX.set(event.nativeEvent.x)} /* ref={ref} */
    >
      {child}
      <TooltipPortal ref={ref} mouseX={mouseX} />
    </div>
  );
};
