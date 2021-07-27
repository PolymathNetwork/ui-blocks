import { FC } from 'react';
import styled from 'styled-components';

import { getMargin } from '../../theme/utils';
import { IconType, CSSPropertiesExtended } from '../../theme/types';
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

const sizeMap: Record<string, CSSPropertiesExtended> = {
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

export const Button: FC<ButtonProps> = ({
  variant,
  size = 'm',
  icon,
  margin,
  children,
  ...props
}) => {
  const IconContainer = styled.span(({ theme }) => ({
    display: 'inline-block',
    marginRight: theme.GAP.s,
  }));
  const Component = styled.button(({ theme }) => ({
    ...(theme.BUTTON[variant] || {}),
    margin: getMargin({ theme, margin }),
    ...(sizeMap[size] || {}),
  }));
  return (
    <Component {...props}>
      {icon && (
        <IconContainer>
          <Icon icon={icon} variant="basic" size="12px" />
        </IconContainer>
      )}
      {children}
    </Component>
  );
};
