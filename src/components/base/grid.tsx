import styled from '@emotion/styled';
import {Interpolation} from '@emotion/react';

type Placement = 'start' | 'end' | 'center' | 'stretch';

type ContainerProps = {
  autoFlow?: 'row' | 'column' | 'dense';
  columnAxis?: Placement;
  gap?: string;
  inline?: boolean;
  place?: Placement;
  rowAxis?: Placement;
  template?: string;
  templateAreas?: string;
  templateColumns?: string;
  templateRows?: string;
};

const baseGridStyles = (props: ContainerProps): Interpolation<any> => ({
  alignItems: props.columnAxis,
  display: props.inline ? 'inline-grid' : 'grid',
  gap: props.gap,
  gridTemplate: props.template,
  gridTemplateAreas: props.templateAreas,
  gridTemplateColumns: props.templateColumns,
  gridTemplateRows: props.templateRows,
  justifyItems: props.rowAxis,
  placeItems: props.place,
});

export const Grid = styled.div`
  ${baseGridStyles}
`;

type ItemProps = {
  align?: Placement;
  area?: string;
  column?: string;
  columnEnd?: number | string;
  columnStart?: number | string;
  justify?: Placement;
  place?: Placement;
  row?: string;
  rowEnd?: number | string;
  rowStart?: number | string;
};

const baseGridItemStyles = (props: ItemProps): Interpolation<any> => ({
  alignSelf: props.align,
  gridArea: props.area,
  gridColumn: props.column,
  gridColumnEnd: props.columnEnd,
  gridColumnStart: props.columnStart,
  gridRow: props.row,
  gridRowEnd: props.rowEnd,
  gridRowStart: props.rowStart,
  justifySelf: props.justify,
  placeSelf: props.place,
});

export const GridItem = styled.div`
  ${baseGridItemStyles}
`;
