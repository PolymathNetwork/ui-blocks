import { FC } from 'react';
import styled from 'styled-components';

import { getMargin } from '../../theme/utils';

export type TextVariant = 'p' | 'span' | 'label';

export type TextProps = {
  variant: TextVariant;
  color?: string;
  altColor?: string;
  display?: 'block' | 'inline-block' | 'inline' | 'none';
  margin?: string;
};

export const Text: FC<TextProps> = ({
  variant,
  color,
  altColor,
  display,
  margin,
  ...props
}) => {
  const Component = styled[variant](({ theme }) => ({
    ...(theme.TYPOGRAPHY[variant] || {}),
    ...(margin && { margin: getMargin({ theme, margin }) }),
    ...(color && { color: theme.COLOR[color] }),
    ...(altColor ? { span: { color: theme.COLOR[altColor] } } : {}),
    ...(display && { display }),
  }));
  return <Component {...props} />;
};
