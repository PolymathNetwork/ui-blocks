import { FC } from 'react';
import styled from 'styled-components';

import { Display, CSSPropertiesExtended } from '../../theme/types';
import { getMargin } from '../../theme/utils';

export type BadgeVariant = 'basic' | 'success' | 'warning' | 'danger';

export type BadgeProps = {
  variant: BadgeVariant;
  margin?: string;
  display?: Display;
  size?: 's' | 'm';
};

const sizeMap: Record<string, CSSPropertiesExtended> = {
  s: {
    padding: '2px 8px',
    fontSize: '10px !important',
  },
  m: {
    padding: '5px 16px',
  },
};

const Component = styled.span<BadgeProps>(
  ({ theme, variant, display, margin, size }) => ({
    ...(theme.BADGE[variant] || {}),
    display,
    margin: getMargin({ theme, margin }),
    ...(size ? sizeMap[size] : {}),
  }),
);

export const Badge: FC<BadgeProps> = ({
  display = 'inline-block',
  size = 'm',
  ...props
}) => <Component display={display} size={size} {...props} />;
