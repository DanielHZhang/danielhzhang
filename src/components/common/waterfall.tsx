import {Box, Grid} from '@chakra-ui/layout';
import {ReactNode, useRef, useState} from 'react';
import {useResizeObserver} from 'src/hooks';

const ROW_GAP = 16;
const ROW_HEIGHT = 8;

type ItemProps = {
  // setRef: (ref: HTMLDivElement | null) => any;
  children: ReactNode;
};

const WaterfallGridItem = (props: ItemProps): JSX.Element => {
  const ref = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState(0);
  // const contentRef = useRef<HTMLDivElement>(null);
  // const resize = () => {
  //   if (!contentRef.current) {
  //     return;
  //   }
  //   const rect = contentRef.current.getBoundingClientRect();
  //   const rowSpan = Math.ceil((rect.height + ROW_GAP) / (ROW_HEIGHT + ROW_GAP));
  //   console.log('content height:', rect.height, 'row span:', rowSpan);
  //   setSize(rowSpan);
  // };

  useResizeObserver((entry) => {
    const contentHeight = entry.contentRect.height;
    const spans = Math.ceil((contentHeight + ROW_GAP) / (ROW_HEIGHT + ROW_GAP));
    setSize(spans);
    // console.log('entry:', entry.target, entry);
  }, ref);

  return (
    <Box gridRowEnd={`span ${size}`}>
      <Box ref={ref} /* ref={(el) => props.setRef(el)} */>{props.children}</Box>
    </Box>
  );
};

type Props<T> = {
  items: T[];
  children: (value: T, index: number) => ReactNode;
};

export const WaterfallGrid = <T,>(props: Props<T>): JSX.Element => {
  return (
    <Grid
      templateColumns='repeat(auto-fill, minmax(400px, 1fr))'
      autoRows={`${ROW_HEIGHT}px`}
      rowGap={`${ROW_GAP}px`}
      columnGap='32px'
    >
      {props.items.map((value, index) => (
        <WaterfallGridItem key={index} /* setRef={setChildRef(index)} */>
          {props.children(value, index)}
        </WaterfallGridItem>
      ))}
    </Grid>
  );
};
