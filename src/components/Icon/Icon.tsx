import { ComponentType } from 'react';
import styled from 'styled-components';

import { getMargin } from '../../theme/utils';

export type IconVariant = 'basic' | 'circle';

export type IconProps = {
  variant: IconVariant;
  icon: ComponentType;
  size:
    | string
    | {
        width: string;
        height: string;
      };
  margin?: string;
  color?: string;
  bg?: string;
  scale?: number;
  rotate?: string;
};

const Component = styled.span<Omit<IconProps, 'icon'>>(
  ({ variant, margin, size, bg, scale, rotate, color, theme }) => ({
    ...(theme.ICON[variant] || {}),
    display: 'inline-block',
    margin: getMargin({ theme, margin }),
    padding: 0,
    width: typeof size === 'string' ? size : size.width,
    height: typeof size === 'string' ? size : size.height,
    ...(bg && theme.COLOR[bg] ? { backgroundColor: theme.COLOR[bg] } : {}),
    svg: {
      display: 'block',
      width: '100%',
      height: '100%',
      ...(scale ? { padding: `${(1 - scale) * 100}%` } : {}),
      ...(rotate ? { transform: `rotateZ(${rotate})` } : {}),
    },
    'svg > *': {
      ...theme.ICON[variant]['svg > *'],
      ...(color || theme.ICON[variant].fill
        ? { fill: color ? theme.COLOR[color] : theme.ICON[variant].fill }
        : {}),
    },
  }),
);

export function Icon(iconProps: IconProps) {
  const {
    variant,
    icon: SvgIcon,
    scale = variant === 'circle' ? 0.75 : undefined,
    ...props
  } = iconProps;

  return (
    <Component variant={variant} scale={scale} {...props}>
      <SvgIcon />
    </Component>
  );
}
