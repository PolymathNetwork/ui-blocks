import styled from 'styled-components';

import { getMargin } from '../../theme/utils';
import { ButtonProps } from './types';

const sizeMap: Record<string, Record<string, string>> = {
  s: {
    padding: '8px 16px',
    minWidth: '82px',
  },
  m: {
    padding: '12px 16px',
    minWidth: '104px',
  },
  l: {
    padding: '16px',
    minWidth: '128px',
  },
};

export const Component = styled.button<ButtonProps>(
  ({ theme, variant, margin, size }) => ({
    ...(theme.BUTTON[variant] || {}),
    ...(size ? sizeMap[size] : {}),
    margin: getMargin({ theme, margin }),
  })
);

export const IconContainer = styled.span(({ theme }) => ({
  display: 'inline-block',
  marginRight: theme.GAP.s,
}));
