import { FC } from 'react';
import styled from 'styled-components';

import { TextFormat, Display } from '../../themeSettings/types';
import { getMargin } from '../../themeSettings/utils';

export type TextVariant = 'p' | 'span' | 'label';

export type TextProps = {
  variant: TextVariant;
  margin?: string;
  format?: TextFormat;
  color?: string;
  altColor?: string;
  display?: Display;
  align?: 'center' | 'left' | 'right';
};

const Component = styled.span<TextProps>(
  ({ variant, format, margin, color, altColor, display, align, theme }) => ({
    ...(theme.TEXT[variant] || {}),
    ...(format ? theme.TYPOGRAPHY[format] : {}),
    margin: getMargin({ theme, margin }),
    ...(color ? { color: theme.COLOR[color] } : {}),
    ...(altColor ? { span: { color: theme.COLOR[altColor] } } : {}),
    ...(display ? { display } : {}),
    ...(align ? { textAlign: align } : {}),
  }),
);

export const Text: FC<TextProps> = ({ variant, ...props }) => (
  <Component as={variant} variant={variant} {...props} />
);
