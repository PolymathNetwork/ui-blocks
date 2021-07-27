import { FC } from 'react';

import { FlexProps } from './types';
import { Component } from './styles';

export const Flex: FC<FlexProps> = (props) => {
  return <Component {...props} />;
};
