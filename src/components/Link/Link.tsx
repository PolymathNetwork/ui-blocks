import styled from 'styled-components';
import { Icon, IconProps } from '../Icon';
import { polyIcons } from '../../theme';
import { Flex } from '../Flex';
import { Text, TextProps } from '../Text';
import { TextFormat } from '../../theme/types';

const StyledAnchor = styled.a`
  text-decoration: none;
  :hover, :focus: {
    textDecoration: none,
  }
`;

export type LinkProps = {
  href?: string;
  onClick?: (event: any) => void;
  label: string;
  size: 's' | 'm' | 'l';
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

const sizeMap: Record<string, Record<string, string>> = {
  s: {
    format: 'b3m',
    size: '12px',
  },
  m: {
    format: 'b2m',
    size: '14px',
  },
  l: {
    format: 'b1m',
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
      format={sizeMap[size].format as TextFormat}
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
