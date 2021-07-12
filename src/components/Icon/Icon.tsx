import { FC } from 'react';
import styled from 'styled-components';

import { getMargin } from '../../theme/utils';

export type IconProps = {
  variant: 'basic' | 'circle';
  icon: (props: any) => JSX.Element;
  size: string;
  color?: string;
  bg?: string;
  scale?: number;
  rotate?: string;
  margin?: string;
};

export const Icon: FC<IconProps> = ({
  variant,
  icon: Icon,
  size,
  color,
  bg,
  rotate,
  scale,
  margin,
  ...props
}) => {
  const Component = styled.span(({ theme }) => ({
    ...(theme.ICON[variant] || {}),
    display: 'inline-block',
    ...(margin ? { margin: getMargin({ theme, margin }) } : { margin: 0 }),
    padding: 0,
    width: size,
    height: size,
    ...(bg && theme.COLOR[bg] && { backgroundColor: theme.COLOR[bg] }),
    svg: {
      display: 'block',
      width: '100%',
      height: '100%',
      ...(scale && { padding: `${(1 - scale) * 100}%` }),
      ...(rotate && { transform: `rotateZ(${rotate})` }),
    },
    ...(color &&
      theme.COLOR[color] && {
        'svg > *': {
          ...theme.ICON[variant]['svg > *'],
          fill: theme.COLOR[color],
        },
      }),
  }));
  return (
    <Component {...props}>
      <Icon />
    </Component>
  );
};
