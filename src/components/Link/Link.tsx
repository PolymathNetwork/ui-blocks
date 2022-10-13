import styled from 'styled-components';

import { polyIcons } from '../../theme';
import { Icon } from '../Icon';
import { Text, TextProps, TextVariant } from '../Text';

const wrapperStyles = {
  padding: '3px',
};

export type LinkProps = {
  href?: string;
  onClick?: (event: any) => void;
  label: string;
  size: 's' | 'm' | 'l';
  variant: 'primary' | 'secondary';
  disabled: boolean;
  target?: '_blank' | '_self' | '_parent' | '_top';
};

const StyledAnchor = styled.a(({ theme }) => ({
  display: 'inline-flex',
  padding: '3px',
  textDecoration: 'none',
  '&:focus': {
    border: '2px solid',
    borderColor: theme.COLOR.brandMain1,
    borderRadius: '5px',
    padding: '1px',
  },
}));

const TextComponent = styled(Text)<
  TextProps & { disabled: boolean; linkVariant: 'primary' | 'secondary' }
>(({ theme, disabled, variant, linkVariant }) => ({
  ...(theme.TYPOGRAPHY[variant as TextVariant] || {}),
  cursor: disabled ? 'not-allowed' : 'pointer',
  color: disabled
    ? theme.COLOR.gray3
    : linkVariant === 'primary'
    ? theme.COLOR.brandMain
    : theme.COLOR.gray1,
  fontWeight: 400,
  position: 'relative',
  display: 'inline-flex',
  alignItems: 'center',
  margin: 0,
  '&:after': {
    display: 'block',
    content: "''",
    position: 'absolute',
    top: '75%',
    left: 0,
    width: '100%',
    height: '1px',
    background:
      linkVariant === 'primary' ? theme.COLOR.gray1 : theme.COLOR.brandMain,
    opacity: 0,
    transition: 'all .2s ease',
  },
  '&:hover:after': {
    opacity: disabled ? 0 : 1,
  },
  '&:hover': {
    color: disabled
      ? theme.COLOR.gray3
      : linkVariant === 'primary'
      ? theme.COLOR.gray1
      : theme.COLOR.brandMain,

    'svg > *': {
      fill: disabled
        ? theme.COLOR.gray3
        : linkVariant === 'primary'
        ? theme.COLOR.gray1
        : theme.COLOR.brandMain,
    },
  },
}));

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
  let component: JSX.Element = <></>;

  const labelComponent = (
    <TextComponent
      variant={sizeMap[size].variant as TextVariant}
      linkVariant={variant}
      as="p"
      disabled={disabled}
    >
      {label}
      <Icon
        variant="basic"
        margin="0 0 0 4px"
        icon={polyIcons.ArrowRight}
        size={sizeMap[size].size as string}
        color={
          disabled ? 'gray3' : variant === 'primary' ? 'brandMain' : 'gray1'
        }
      />
    </TextComponent>
  );

  if (disabled) {
    component = (
      <div style={wrapperStyles} {...rest}>
        {labelComponent}
      </div>
    );
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
  return component;
};
