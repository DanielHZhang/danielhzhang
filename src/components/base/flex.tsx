import {Interpolation} from '@emotion/react';
import styled from '@emotion/styled';
import {styledOptions} from 'src/components/base/props';

type Props = {
  basis?: string;
  /** `align-items`: Vertical axis for `row`, horizontal axis for `column` */
  crossAxis?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
  flow?: 'row' | 'column';
  grow?: number;
  inline?: boolean;
  /** `justify-content`: Horizontal axis for `row`, vertical axis for `column` */
  mainAxis?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around';
  order?: number;
  shrink?: number;
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
};

const baseFlexStyles = ({flow = 'row', inline, ...props}: Props): Interpolation<any> => ({
  alignItems: props.crossAxis,
  display: inline ? 'inline-flex' : 'flex',
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
