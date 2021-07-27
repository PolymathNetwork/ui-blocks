import { FC } from 'react';

import { BadgeProps } from './types';
import { Component } from './styles';

export const Badge: FC<BadgeProps> = ({
  variant,
  display = 'inline-block',
  size = 'm',
  ...props
}) => <Component variant={variant} display={display} size={size} {...props} />;
