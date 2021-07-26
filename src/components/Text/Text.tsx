import { FC } from 'react';

import { Component } from './styles';
import { TextProps } from './types';

export const Text: FC<TextProps> = ({
  variant,
  format,
  color,
  altColor,
  display,
  margin,
  ...props
}) => (
  <Component
    as={variant}
    variant={variant}
    format={format}
    color={color}
    altColor={altColor}
    display={display}
    margin={margin}
    {...props}
  />
);
