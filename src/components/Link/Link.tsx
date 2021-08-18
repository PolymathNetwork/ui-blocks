import React from 'react';
import styled from 'styled-components';
import { Icon, IconProps } from '../Icon';
import { polyIcons } from '../../theme';
import { Flex } from '../Flex';
import { Text, TextProps } from '../Text';
import { TextFormat } from '../../theme/types';

export interface LinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement | HTMLDivElement> {
  href?: string;
  onClick?: (event: any) => void;
  label: string;
  size: 'large' | 'medium' | 'small';
  variant: 'primary' | 'secondary';
  disabled: boolean;
  target?: '_blank' | '_self' | '_parent' | '_top';
}

const TextComponent = styled(Text)<TextProps & { disabled: boolean }>(
  ({ disabled }) => ({
    cursor: disabled ? 'not-allowed' : 'pointer',
  }),
);
const IconComponent = styled(Icon)<IconProps & { disabled: boolean }>(
  ({ disabled }) => ({
    cursor: disabled ? 'not-allowed' : 'pointer',
  }),
);

const LinkComponent = ({
  href,
  onClick,
  label,
  size,
  disabled,
  variant,
  ...rest
}: LinkProps) => {
  let component: any;
  const textFormat: TextFormat =
    size === 'large' ? 'b1m' : size === 'medium' ? 'b2m' : 'b3m';
  const iconSize: string =
    size === 'large' ? '16px' : size === 'medium' ? '14px' : '12px';
  const labelComponent = (
    <TextComponent
      format={textFormat}
      variant="p"
      color={disabled ? 'gray3' : variant === 'primary' ? 'brandMain' : 'gray1'}
      disabled={disabled}
    >
      {label}
    </TextComponent>
  );
  if (disabled) {
    component = <div {...rest}>{labelComponent}</div>;
  } else if (onClick) {
    component = (
      <div role="none" onClick={onClick} {...rest}>
        {labelComponent}
      </div>
    );
  } else if (href) {
    component = (
      <a href={href} {...rest}>
        {labelComponent}
      </a>
    );
  }
  return (
    <Flex variant="raw" align="center">
      {component}
      <IconComponent
        variant="basic"
        icon={polyIcons.ArrowRight}
        margin="0 5px"
        size={iconSize}
        color={
          disabled ? 'gray3' : variant === 'primary' ? 'brandMain' : 'gray1'
        }
        disabled={disabled}
      />
    </Flex>
  );
};

export const Link = styled(LinkComponent)(({ theme }) => ({
  textDecoration: 'none',
  ...theme.links,
  '&:hover, &:focus': {
    textDecoration: 'none',
  },
}));
