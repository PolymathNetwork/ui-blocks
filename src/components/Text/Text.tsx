import { FC } from 'react';
import styled from 'styled-components';

import { TextFormat } from '../../theme/types';
import { getMargin } from '../../theme/utils';

export type TextVariant = 'p' | 'span' | 'label';

export type TextProps = {
  variant: TextVariant;
  margin?: string;
  format?: TextFormat;
  color?: string;
  altColor?: string;
  display?: 'block' | 'inline-block' | 'inline' | 'none';
};

export const Component = styled.span<TextProps>(
  ({ variant, format, margin, color, altColor, display, theme }) => ({
    ...(theme.TEXT[variant] || {}),
    ...(format && (theme.TYPOGRAPHY[format] || {})),
    margin: getMargin({ theme, margin }),
    ...(color && { color: theme.COLOR[color] }),
    ...(altColor ? { span: { color: theme.COLOR[altColor] } } : {}),
    ...(display && { display }),
  }),
);

export const Text: FC<TextProps> = ({ variant, ...props }) => (
  <Component as={variant} variant={variant} {...props} />
);
