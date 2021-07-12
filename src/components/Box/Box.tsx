import { FC } from 'react';
import styled from 'styled-components';

import { getMargin } from '../../theme/utils';

export type BoxProps = {
  variant: 'basic' | 'border' | 'shadow';
  margin?: string;
};

export const Box: FC<BoxProps> = ({ variant, margin, ...props }) => {
  const Component = styled.div(({ theme }) => ({
    ...(theme.BOX[variant] || {}),
    ...(margin && { margin: getMargin({ theme, margin }) }),
  }));
  return <Component {...props} />;
};
