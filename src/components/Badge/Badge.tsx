import { FC, ComponentType } from 'react';
import styled from 'styled-components';

import { Display, CSSPropertiesExtended } from '../../theme/types';
import { getMargin } from '../../theme/utils';
import { Icon } from '../Icon';

export type BadgeVariant = 'default' | 'success' | 'warning' | 'danger';
enum IconPosition {
  Left = 'left',
  Right = 'right',
}

export type BadgeProps = {
  variant: BadgeVariant;
  margin?: string;
  display?: Display;
  icon?: ComponentType;
  iconPosition?: IconPosition;
  size?: 's' | 'l';
};

const sizeMap: Record<string, CSSPropertiesExtended> = {
  l: {
    padding: '2px 8px',
  },
  s: {
    padding: '0px 8px',
    lineHeight: '16px',
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

const IconContainer = styled.span(() => ({
  display: 'inline-block',
  lineHeight: '10px',
  verticalAlign: ' middle',
}));

const StyledIcon = styled(Icon)<any>(({ theme, themeVariant }) => {
  return {
    color: theme.BADGE[themeVariant].color,
    svg: {
      path: {
        fill: `${theme.BADGE[themeVariant].color} !important`,
      },
    },
  };
});

const renderIconContainer = (icon: ComponentType, variant: BadgeVariant) => (
  <IconContainer>
    <StyledIcon
      themeVariant={variant}
      icon={icon}
      variant="basic"
      size="14px"
    />
  </IconContainer>
);

export const Badge: FC<BadgeProps> = ({
  display = 'inline-block',
  size = 'l',
  variant = 'default',
  icon,
  iconPosition,
  children,
  ...props
}) => (
  <Component variant={variant} display={display} size={size} {...props}>
    {icon &&
      (!iconPosition || iconPosition === IconPosition.Left) &&
      renderIconContainer(icon, variant)}
    {children}
    {icon &&
      iconPosition === IconPosition.Right &&
      renderIconContainer(icon, variant)}
  </Component>
);
