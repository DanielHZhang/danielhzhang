import {Box, Grid} from '@chakra-ui/layout';
import {ReactNode, RefObject, useCallback, useRef, useState} from 'react';
import {useDidMount} from 'src/hooks';

type ItemProps = {
  gridRef: RefObject<HTMLDivElement>;
  children: ReactNode;
};

const WaterfallGridItem = (props: ItemProps): JSX.Element => {
  const [size, setSize] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);
  const resize = () => {
    if (!contentRef.current) {
      return;
    }
    const rect = contentRef.current.getBoundingClientRect();
    const rowHeight = 8;
    const rowGap = 16;
    const rowSpan = Math.ceil((rect.height + rowGap) / (rowHeight + rowGap));
    console.log('content height:', rect.height, 'row span:', rowSpan);
    setSize(rowSpan);
  };

  useDidMount(() => {
    resize();
  });

  return (
    <Box gridRowEnd={`span ${size}`}>
      <Box ref={contentRef}>{props.children}</Box>
    </Box>
  );
};

type Props<T> = {
  items: T[];
  children: (value: T, index: number /* gridRef: RefObject<HTMLDivElement> */) => ReactNode;
};

// repeat(2, 1fr)
export const WaterfallGrid = <T,>(props: Props<T>): JSX.Element => {
  const ref = useRef<HTMLDivElement>(null);
  const measuredRef = useCallback((el: HTMLDivElement) => {
    if (!(el instanceof HTMLDivElement)) {
      return;
    }
    // const computedStyle = window.getComputedStyle(el);
    // const rowHeight = parseInt(computedStyle.getPropertyValue('grid-auto-rows'), 10);
    // const rowGap = parseInt(computedStyle.getPropertyValue('grid-row-gap'), 10);
    // console.log('what is this', computedStyle.getPropertyValue('grid-auto-rows'));
    // console.log('what is this', computedStyle.getPropertyValue('grid-row-gap'));
  }, []);
  return (
    <Grid
      ref={measuredRef}
      templateColumns='repeat(auto-fill, minmax(300px,1fr))'
      gap='16px'
      autoRows='8px'
    >
      {props.items.map((value, index) => (
        <WaterfallGridItem key={index} gridRef={ref}>
          {props.children(value, index)}
        </WaterfallGridItem>
      ))}
    </Grid>
  );
};
