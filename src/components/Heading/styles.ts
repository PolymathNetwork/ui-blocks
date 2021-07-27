import styled from 'styled-components';

import { getMargin } from '../../theme/utils';
import { HeadingProps } from './types';

export const Component = styled.h1<HeadingProps>(
  ({ theme, color, altColor, margin, variant }) => ({
    ...(theme.TYPOGRAPHY[variant] || {}),
    margin: getMargin({ theme, margin }),
    ...(color ? { color: theme.COLOR[color] } : {}),
    ...(altColor ? { span: { color: theme.COLOR[altColor] } } : {}),
  })
);
