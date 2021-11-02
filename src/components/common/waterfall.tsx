import {Box, Grid} from '@chakra-ui/react';
import {ReactNode, useRef, useState} from 'react';
import {useResizeObserver} from 'src/hooks';

const ROW_GAP = 16;
const ROW_HEIGHT = 8;

type ItemProps = {
  children: ReactNode;
};

const WaterfallGridItem = (props: ItemProps): JSX.Element => {
  const ref = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState(0);

  useResizeObserver((entry) => {
    const contentHeight = entry.contentRect.height;
    const spans = Math.ceil((contentHeight + ROW_GAP) / (ROW_HEIGHT + ROW_GAP));
    setSize(spans);
  }, ref);

  return (
    <Box gridRowEnd={`span ${size}`}>
      <Box ref={ref}>{props.children}</Box>
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
      templateColumns={{
        sm: 'repeat(auto-fill, minmax(300px, 1fr))',
      }}
      autoRows={`${ROW_HEIGHT}px`}
      rowGap={`${ROW_GAP}px`}
      columnGap={[null, null, '16px', '32px']}
    >
      {props.items.map((value, index) => (
        <WaterfallGridItem key={index}>{props.children(value, index)}</WaterfallGridItem>
      ))}
    </Grid>
  );
};
