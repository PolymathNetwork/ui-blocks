import { FC } from 'react';
import styled from 'styled-components';

import { getMargin } from '../../theme/utils';
import { Display } from '../../theme/types';

export type BoxVariant = 'raw' | 'basic' | 'border' | 'shadow';

export type BoxProps = {
  variant: BoxVariant;
  margin?: string;
  display?: Display;
};

export const Box: FC<BoxProps> = ({ variant, margin, display, ...props }) => {
  const Component = styled.div(({ theme }) => ({
    ...(theme.BOX[variant] || {}),
    margin: getMargin({ theme, margin }),
    ...(display ? { display } : {}),
  }));
  return <Component {...props} />;
};
