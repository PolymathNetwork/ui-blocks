import { FC } from 'react';

import { FlexProps } from './types';
import { Component } from './styles';

export const Flex: FC<FlexProps> = ({
  variant,
  justify,
  align,
  dir,
  ...props
}) => {
  return (
    <Component
      justify={justify}
      align={align}
      dir={dir}
      variant={variant}
      {...props}
    />
  );
};
