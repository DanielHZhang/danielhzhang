import {Box, Grid} from '@chakra-ui/layout';
import {ReactNode, useRef} from 'react';

type ItemProps = {
  gridRef: any;
  children: ReactNode;
};

const WaterfallGridItem = (props: ItemProps): JSX.Element => {
  const contentRef = useRef<HTMLDivElement>(null);
  const resize = (item) => {
    if (!contentRef.current) {
      return;
    }
    const rowHeight = parseInt(window.getComputedStyle().getPropertyValue('grid-auto-rows'), 10);
    const rowGap = parseInt(window.getComputedStyle().getPropertyValue('grid-row-gap'), 10);
    const rowSpan = Math.ceil(
      (contentRef.current.getBoundingClientRect().height + rowGap) / (rowHeight + rowGap)
    );
  };

  return (
    <Box gridRowEnd='span '>
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
  return (
    <Grid templateColumns='repeat(auto-fill, minmax(300px,1fr))' gap='2rem' /* autoRows='10px' */>
      {props.items.map((value, index) => (
        <WaterfallGridItem key={index} gridRef={ref}>
          {props.children(value, index)}
        </WaterfallGridItem>
      ))}
    </Grid>
  );
};
