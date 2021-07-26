import { FC } from 'react';
import styled from 'styled-components';

import { getMargin } from '../../theme/utils';

export type HeadingVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export type HeadingProps = {
  variant: HeadingVariant;
  margin?: string;
  color?: string;
  altColor?: string;
};

const Component = styled.h1<HeadingProps & any>(
  ({ theme, color, altColor, margin, variant }) => ({
    ...(theme.TYPOGRAPHY[variant] || {}),
    margin: getMargin({ theme, margin }),
    ...(color ? { color: theme.COLOR[color] } : {}),
    ...(altColor ? { span: { color: theme.COLOR[altColor] } } : {}),
  })
);

export const Heading: FC<HeadingProps> = ({
  variant,
  color,
  altColor,
  margin,
  ...props
}) => (
  <Component
    as={variant}
    variant={variant}
    color={color}
    altColor={altColor}
    margin={margin}
    {...props}
  />
);
