import { FC } from 'react';
import styled from 'styled-components';

import { getMargin } from '../../theme/utils';

export type HeadingProps = {
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  color?: string;
  altColor?: string;
  margin?: string;
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
    ...(margin && { margin: getMargin({ theme, margin }) }),
    ...(color ? { color: theme.COLOR[color] } : {}),
    ...(altColor ? { span: { color: theme.COLOR[altColor] } } : {}),
  }));
  return <Component {...props} />;
};
