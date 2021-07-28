import { FC } from 'react';
import styled from 'styled-components';

import { Display, Shadow, Radius } from '../../theme/types';
import { getMargin } from '../../theme/utils';

export type BoxVariant = 'raw' | 'basic' | 'border' | 'shadow';

export type BoxProps = {
  variant: BoxVariant;
  margin?: string;
  display?: Display;
  shadow?: Shadow;
  radius?: Radius;
  bg?: string;
};

const Component = styled.div<BoxProps>(
  ({ variant, margin, display, shadow, theme }) => ({
    ...(theme.BOX[variant] || {}),
    margin: getMargin({ theme, margin }),
    ...(display ? { display } : {}),
    ...(shadow ? { boxShadow: theme.SHADOW[shadow] } : {}),
  }),
);

export const Box: FC<BoxProps> = (props) => {
  return <Component {...props} />;
};
