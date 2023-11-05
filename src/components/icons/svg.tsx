import { ReactNode } from 'react';

type SvgProps = {
  viewBox?: string | number;
  children: ReactNode;
  color?: string;
  hoverColor?: string | false;
  size?: string;
  preserveAspectRatio?: string;
};

export const Svg = (props: SvgProps) => {
  const { children, color, hoverColor = false, size, viewBox = '0 0 128 128', preserveAspectRatio } = props;
  return (
    <svg
      viewBox={typeof viewBox === 'number' ? `0 0 ${viewBox} ${viewBox}` : viewBox}
      preserveAspectRatio={preserveAspectRatio}
      className="transition-all"
      // css={
      //   innerCss || {
      //     width: size,
      //     fill: color,
      //     transition: 'all ease-in-out 200ms',
      //     ':hover': { fill: hoverColor || undefined },
      //   }
      // }
    >
      {children}
    </svg>
  );
};
