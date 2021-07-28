import { FC } from 'react';
import styled from 'styled-components';

import { IconType } from '../../theme/types';
import { getMargin } from '../../theme/utils';

export type IconVariant = 'basic' | 'circle';

export type IconProps = {
  variant: IconVariant;
  margin?: string;
  icon: IconType;
  size: string;
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
    width: size,
    height: size,
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
        ? {
            fill: color ? theme.COLOR[color] : theme.ICON[variant].fill,
          }
        : {}),
    },
  }),
);

export const Icon: FC<IconProps> = ({
  variant,
  icon: SvgIcon,
  scale = variant === 'circle' ? 0.9 : undefined,
  ...props
}) => {
  return (
    <Component variant={variant} scale={scale} {...props}>
      <SvgIcon />
    </Component>
  );
};
