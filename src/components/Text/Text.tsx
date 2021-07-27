import { FC } from 'react';
import styled from 'styled-components';

import { getMargin } from '../../theme/utils';
import { TextFormat, Display } from '../../theme/types';

export type TextVariant = 'p' | 'span' | 'label';

export type TextProps = {
  variant: TextVariant;
  margin?: string;
  format?: TextFormat;
  color?: string;
  altColor?: string;
  display?: Display;
};

export const Text: FC<TextProps> = ({
  variant,
  format,
  color,
  altColor,
  display,
  margin,
  ...props
}) => {
  const Component = styled[variant](({ theme }) => ({
    ...(theme.TEXT[variant] || {}),
    ...(format ? theme.TYPOGRAPHY[format] || {} : {}),
    margin: getMargin({ theme, margin }),
    ...(color ? { color: theme.COLOR[color] } : {}),
    ...(altColor ? { span: { color: theme.COLOR[altColor] } } : {}),
    ...(display ? { display } : {}),
  }));
  return <Component {...props} />;
};
