import styled from '@emotion/styled';
import {Interpolation} from '@emotion/react';
import {styledOptions} from 'src/components/props';

type Props = {
  flow?: 'row' | 'column';
  grow?: number;
  shrink?: number;
  /** `align-items`: Vertical axis for `row`, horizontal axis for `column` */
  crossAxis?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
  /** `justify-content`: Horizontal axis for `row`, vertical axis for `column` */
  mainAxis?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around';
  basis?: string;
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  order?: number;
};

const baseFlexStyles = ({flow = 'row', ...props}: Props): Interpolation<any> => ({
  alignItems: props.crossAxis,
  display: 'flex',
  flexBasis: props.basis,
  flexFlow: flow,
  flexGrow: props.grow,
  flexShrink: props.shrink,
  flexWrap: props.wrap,
  justifyContent: props.mainAxis,
  order: props.order,
});

export const Flex = styled('div', styledOptions)<Props>`
  ${baseFlexStyles};
`;
