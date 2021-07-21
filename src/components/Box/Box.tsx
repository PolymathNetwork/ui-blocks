import { FC } from 'react';
import styled from 'styled-components';

import { getMargin } from '../../theme/utils';

export type BoxVariant = 'raw' | 'basic' | 'border' | 'shadow';

export type BoxProps = {
  variant: BoxVariant;
  margin?: string;
};

export const Box: FC<BoxProps> = ({ variant, margin, ...props }) => {
  const Component = styled.div(({ theme }) => ({
    ...(theme.BOX[variant] || {}),
    margin: getMargin({ theme, margin }),
  }));
  return <Component {...props} />;
};
