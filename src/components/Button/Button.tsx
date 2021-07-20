import { FC } from 'react';
import styled from 'styled-components';

import { Icon } from '../Icon';
import { getMargin } from '../../theme/utils';

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'inline';

export type ButtonProps = {
  variant: ButtonVariant;
  margin?: string;
  size?: 's' | 'm' | 'l';
  disabled?: boolean;
  icon?: (props: any) => JSX.Element;
  onClick?: () => void;
};

const IconContainer = styled.span`
  display: inline-block;
  margin-right: ${({ theme }) => theme.GAP.s};
`;

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

export const Button: FC<ButtonProps> = ({
  variant,
  size = 'm',
  icon,
  margin,
  children,
  ...props
}) => {
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
