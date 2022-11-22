import { ComponentType, PropsWithChildren } from 'react';
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
  Right = 'right',
}

export type ButtonProps = PropsWithChildren<{
  variant: ButtonVariant;
  margin?: string;
  id?: string;
  type?: 'submit' | 'reset' | 'button';
  size?: 's' | 'm' | 'l';
  disabled?: boolean;
  icon?: ComponentType;
  fillIcon?: boolean,
  iconPosition?: 'left' | 'right';
  onClick?: () => void;
  width?: string;
}>;

const sizeMap: Record<string, Record<string, string>> = {
  s: {
    padding: '4px 16px',
  },
  m: {
    padding: '8px 16px',
  },
  l: {
    padding: '12px 16px',
  },
};

const Component = styled.button<ButtonProps>(
  ({ theme, variant, margin, size, width }) => {
    return {
      ...(theme.BUTTON[variant] || {}),
      ...(size ? sizeMap[size] : {}),
      margin: getMargin({ theme, margin }),
      ...(width && {width: width})
    };
  },
);

const IconContainer = styled.span<any>(({ iconPosition }) => ({
  display: 'inline-block',
  ...(iconPosition === IconPosition.Left && { marginRight: '12px' }),
  ...(iconPosition === IconPosition.Right && { marginLeft: '12px' }),
  lineHeight: '24px',
  fontSize: '19px',
}));

const StyledIcon = styled(Icon)<any>(({ theme, themeVariant, fillIcon }) => {
  return {
    color: theme.BUTTON[themeVariant].color,
    ...(fillIcon && {
      svg: {
        path: {
          fill: theme.BUTTON[themeVariant].color,
        },
      }
    }),
  };
});

const renderIconContainer = (
  icon: ComponentType,
  variant: ButtonVariant,
  iconPosition: string = IconPosition.Left,
  fillIcon: boolean
) => (
  <IconContainer iconPosition={iconPosition}>
    <StyledIcon
      themeVariant={variant}
      icon={icon}
      variant="basic"
      size="14px"
      fillIcon={fillIcon}
    />
  </IconContainer>
);

export function Button(buttonProps: ButtonProps) {
  const {
    type = 'button',
    size = 'm',
    icon,
    iconPosition,
    fillIcon = true,
    children,
    variant,
    ...props
  } = buttonProps;

  return (
    <Component size={size} type={type} variant={variant} {...props}>
      {icon &&
        (!iconPosition || iconPosition === IconPosition.Left) &&
        renderIconContainer(icon, variant, iconPosition, fillIcon)}
      {children}
      {icon &&
        iconPosition === IconPosition.Right &&
        renderIconContainer(icon, variant, iconPosition, fillIcon)}
    </Component>
  );
}
