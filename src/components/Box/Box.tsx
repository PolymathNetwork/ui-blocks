import { FC } from 'react';
import styled from 'styled-components';

import { Display, Shadow, Radius } from '../../theme/types';
import { getMargin, getBorder } from '../../theme/utils';

export type BoxVariant = 'raw' | 'basic' | 'border' | 'shadow';

export type BoxProps = {
  variant: BoxVariant;
  margin?: string;
  padding?: string;
  id?: string;
  display?: Display;
  shadow?: Shadow;
  radius?: Radius;
  bg?: string;
  border?: string;
  width?: number | string;
  maxWidth?: number | string;
};

const Component = styled.div<BoxProps>(
  ({
    theme,
    variant,
    margin,
    padding,
    display,
    shadow,
    radius,
    bg,
    border,
    width,
    maxWidth,
  }) => ({
    ...(theme.BOX[variant] || {}),
    margin: getMargin({ theme, margin }),
    ...(padding ? { padding: getMargin({ theme, margin: padding }) } : {}),
    ...(display ? { display } : {}),
    ...(shadow ? { boxShadow: theme.SHADOW[shadow] } : {}),
    ...(radius ? { borderRadius: theme.RADIUS[radius] } : {}),
    ...(bg ? { backgroundColor: theme.COLOR[bg] } : {}),
    ...(border ? { border: getBorder({ theme, border }) } : {}),
    ...(width ? { width } : {}),
    ...(maxWidth ? { maxWidth } : {}),
  }),
);

export const Box: FC<BoxProps> = (props) => {
  return <Component {...props} />;
};
