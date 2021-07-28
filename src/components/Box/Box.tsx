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
  ({ theme, variant, margin, display, shadow, radius, bg }) => ({
    ...(theme.BOX[variant] || {}),
    margin: getMargin({ theme, margin }),
    ...(display ? { display } : {}),
    ...(shadow ? { boxShadow: theme.SHADOW[shadow] } : {}),
    ...(radius ? { borderRadius: theme.RADIUS[radius] } : {}),
    ...(bg ? { backgroundColor: theme.COLOR[bg] } : {}),
  }),
);

export const Box: FC<BoxProps> = (props) => {
  return <Component {...props} />;
};
