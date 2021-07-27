import { FC } from 'react';
import styled from 'styled-components';

import { getMargin } from '../../theme/utils';
import { Display, Shadow } from '../../theme/types';

export type BoxVariant = 'raw' | 'basic' | 'border' | 'shadow';

export type BoxProps = {
  variant: BoxVariant;
  margin?: string;
  display?: Display;
  shadow?: Shadow;
};

export const Box: FC<BoxProps> = ({
  variant,
  margin,
  display,
  shadow,
  ...props
}) => {
  const Component = styled.div(({ theme }) => ({
    ...(theme.BOX[variant] || {}),
    margin: getMargin({ theme, margin }),
    ...(display ? { display } : {}),
    ...(shadow ? { boxShadow: theme.SHADOW[shadow] } : {}),
  }));
  return <Component {...props} />;
};
