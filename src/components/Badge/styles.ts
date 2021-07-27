import styled from 'styled-components';

import { getMargin } from '../../theme/utils';
import { CSSPropertiesExtended } from '../../theme/types';
import { BadgeProps } from './types';

const sizeMap: Record<string, CSSPropertiesExtended> = {
  s: {
    padding: '2px 8px',
    fontSize: '10px !important',
  },
  m: {
    padding: '5px 16px',
  },
};

export const Component = styled.span<BadgeProps>(
  ({ theme, variant, display, margin, size }) => ({
    ...(theme.BADGE[variant] || {}),
    display,
    margin: getMargin({ theme, margin }),
    ...(size ? sizeMap[size] : {}),
  }),
);
