import styled from 'styled-components';

import { getMargin } from '../../theme/utils';
import { BoxProps } from './types';

export const Component = styled.div<BoxProps>(
  ({ variant, margin, display, shadow, theme }) => ({
    ...(theme.BOX[variant] || {}),
    margin: getMargin({ theme, margin }),
    ...(display ? { display } : {}),
    ...(shadow ? { boxShadow: theme.SHADOW[shadow] } : {}),
  }),
);
