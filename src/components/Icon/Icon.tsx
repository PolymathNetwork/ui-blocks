import { FC } from 'react';

import { IconProps } from './types';
import { Component } from './styles';

export const Icon: FC<IconProps> = ({
  variant,
  icon: SvgIcon,
  size,
  color,
  bg,
  rotate,
  scale = variant === 'circle' ? 0.9 : undefined,
  margin,
  ...props
}) => {
  return (
    <Component
      variant={variant}
      size={size}
      color={color}
      bg={bg}
      rotate={rotate}
      scale={scale}
      margin={margin}
      {...props}
    >
      <SvgIcon />
    </Component>
  );
};
