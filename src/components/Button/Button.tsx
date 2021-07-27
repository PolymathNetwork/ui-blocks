import { FC } from 'react';

import { ButtonProps } from './types';
import { Icon } from '../Icon';
import { Component, IconContainer } from './styles';

export const Button: FC<ButtonProps> = ({
  size = 'm',
  icon,
  children,
  ...props
}) => {
  return (
    <Component size={size} {...props}>
      {icon && (
        <IconContainer>
          <Icon icon={icon} variant="basic" size="12px" />
        </IconContainer>
      )}
      {children}
    </Component>
  );
};
