import styled from 'styled-components';

import { polyIcons } from '../../theme';
import { Icon, IconProps } from '../Icon';
import { Flex } from '../Flex';
import { Text, TextProps, TextVariant } from '../Text';

const StyledAnchor = styled.a(() => ({
  textDecoration: 'none',
  ':hover, :focus': {
    textDecoration: 'none',
  },
}));

export type LinkProps = {
  href?: string;
  onClick?: (event: any) => void;
  label: string;
  size: 's' | 'm' | 'l';
  variant: 'primary' | 'secondary';
  disabled: boolean;
  target?: '_blank' | '_self' | '_parent' | '_top';
};

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

const sizeMap: Record<string, Record<string, string>> = {
  s: {
    variant: 'b3m',
    size: '12px',
  },
  m: {
    variant: 'b2m',
    size: '14px',
  },
  l: {
    variant: 'b1m',
    size: '16px',
  },
};

export const Link = ({
  href,
  onClick,
  label,
  size,
  disabled,
  variant,
  ...rest
}: LinkProps) => {
  let component: any;
  const labelComponent = (
    <TextComponent
      variant={sizeMap[size].variant as TextVariant}
      as="p"
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
      <StyledAnchor href={href} {...rest}>
        {labelComponent}
      </StyledAnchor>
    );
  }
  return (
    <Flex variant="raw" align="center">
      {component}
      <IconComponent
        variant="basic"
        icon={polyIcons.ArrowRight}
        margin="0 5px"
        size={sizeMap[size].size as string}
        color={
          disabled ? 'gray3' : variant === 'primary' ? 'brandMain' : 'gray1'
        }
        disabled={disabled}
      />
    </Flex>
  );
};
