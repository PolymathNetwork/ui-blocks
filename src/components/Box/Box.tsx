import { FC } from 'react';

import { BoxProps } from './types';
import { Component } from './styles';

export const Box: FC<BoxProps> = (props) => {
  return <Component {...props} />;
};
