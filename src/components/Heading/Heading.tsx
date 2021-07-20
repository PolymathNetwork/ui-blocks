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

export const Heading: FC<HeadingProps> = ({
  variant,
  color,
  altColor,
  margin,
  ...props
}) => {
  const Component = styled[variant](({ theme }) => ({
    ...(theme.TYPOGRAPHY[variant] || {}),
    margin: getMargin({ theme, margin }),
    ...(color ? { color: theme.COLOR[color] } : {}),
    ...(altColor ? { span: { color: theme.COLOR[altColor] } } : {}),
  }));
  return <Component {...props} />;
};
