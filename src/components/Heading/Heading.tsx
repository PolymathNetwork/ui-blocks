import { FC } from 'react';

import { HeadingProps } from './types';
import { Component } from './styles';

export const Heading: FC<HeadingProps> = ({
  variant,
  color,
  altColor,
  margin,
  ...props
}) => (
  <Component
    as={variant}
    variant={variant}
    color={color}
    altColor={altColor}
    margin={margin}
    {...props}
  />
);
