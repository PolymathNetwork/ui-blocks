import { FC } from 'react';
import styled from 'styled-components';

import { getMargin } from '../../theme/utils';
import { Display } from '../../theme/types';

export type BadgeVariant = 'basic' | 'success' | 'warning' | 'danger';

export type BadgeProps = {
  variant: BadgeVariant;
  margin?: string;
  display?: Display;
  size?: 's' | 'm';
};

const sizeMap: Record<string, Record<string, string>> = {
  s: {
    padding: '2px 8px',
    fontSize: '10px !important',
  },
  m: {
    padding: '5px 16px',
  },
};

export const Badge: FC<BadgeProps> = ({
  variant,
  margin,
  display = 'inline-block',
  size = 'm',
  ...props
}) => {
  const Component = styled.span(({ theme }) => ({
    ...(theme.BADGE[variant] || {}),
    display,
    margin: getMargin({ theme, margin }),
    ...(sizeMap[size] || {}),
  }));
  return <Component {...props} />;
};
