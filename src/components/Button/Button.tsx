import { FC } from 'react';
import styled from 'styled-components';

import { getMargin } from '../../theme/utils';
import { IconType } from '../../theme/types';
import { Icon } from '../Icon';

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'inline';

export type ButtonProps = {
  variant: ButtonVariant;
  margin?: string;
  id?: string;
  size?: 's' | 'm' | 'l';
  disabled?: boolean;
  icon?: IconType;
  onClick?: () => void;
};

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

const Component = styled.button<ButtonProps>(
  ({ theme, variant, margin, size }) => ({
    ...(theme.BUTTON[variant] || {}),
    ...(size ? sizeMap[size] : {}),
    margin: getMargin({ theme, margin }),
  })
);

const IconContainer = styled.span(({ theme }) => ({
  display: 'inline-block',
  marginRight: theme.GAP.s,
}));

export const Button: FC<ButtonProps> = ({
  variant,
  size = 'm',
  icon,
  margin,
  children,
  ...props
}) => {
  return (
    <Component variant={variant} size={size} margin={margin} {...props}>
      {icon && (
        <IconContainer>
          <Icon icon={icon} variant="basic" size="12px" />
        </IconContainer>
      )}
      {children}
    </Component>
  );
};
