import { FC, ComponentType } from 'react';
import styled from 'styled-components';

import { getMargin } from '../../theme/utils';
import { Icon } from '../Icon';

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'inline'
  | 'special';

enum IconPosition {
  Left = 'left',
  Right = 'right'
};

export type ButtonProps = {
  variant: ButtonVariant;
  margin?: string;
  id?: string;
  type?: 'submit' | 'reset' | 'button';
  size?: 's' | 'm' | 'l';
  disabled?: boolean;
  icon?: ComponentType;
  iconPosition?: IconPosition;
  onClick?: () => void;
};

const sizeMap: Record<string, Record<string, string>> = {
  s: {
    padding: '4px 16px',
    minWidth: '82px',
  },
  m: {
    padding: '8px 16px',
    minWidth: '104px',
  },
  l: {
    padding: '12px 16px',
    minWidth: '128px',
  },
};

const Component = styled.button<ButtonProps>(
  ({ theme, variant, margin, size }) => {
    console.log(theme.BUTTON[variant], variant, "theme.BUTTON[variant]")
    return {
      ...(theme.BUTTON[variant] || {}),
      ...(size ? sizeMap[size] : {}),
      margin: getMargin({ theme, margin }),
    }
  },
);

const IconContainer = styled.span<any>(({ theme, iconPosition }) => ({
  display: 'inline-block',
  ...(iconPosition === IconPosition.Left && { marginRight: '12px' }),
  ...(iconPosition === IconPosition.Right && { marginLeft: '12px' }),
  lineHeight: '24px',
  fontSize: '19px'
}));

const StyledIcon = styled(Icon)<any>(({ theme, themeVariant }) => {
  return {
    color: theme.BUTTON[themeVariant].color,
    svg: {
      path: {
        fill: `${theme.BUTTON[themeVariant].color} !important`,
      }
    }
  }
});

const renderIconContainer = (icon: ComponentType, variant: ButtonVariant, iconPosition: string  = IconPosition.Left) => (
  <IconContainer iconPosition={iconPosition}>
    <StyledIcon themeVariant={variant} icon={icon} variant="basic" size="14px" />
  </IconContainer>
)

export const Button: FC<ButtonProps> = ({
  type = 'button',
  size = 'm',
  icon,
  iconPosition,
  children,
  variant,
  ...props
}) => (
  <Component size={size} type={type} variant={variant} {...props}>
    {icon && (!iconPosition || iconPosition === IconPosition.Left) && renderIconContainer(icon, variant, iconPosition)}
    {children}
    {icon && iconPosition === IconPosition.Right && renderIconContainer(icon, variant, iconPosition)}
  </Component>
);
