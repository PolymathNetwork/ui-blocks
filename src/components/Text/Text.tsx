import { PropsWithChildren } from 'react';
import styled from 'styled-components';

import { Display } from '../../theme/types';
import { getMargin } from '../../theme/utils';

export type TextAs = 'p' | 'span' | 'label';
export type TextVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'b1m'
  | 'b1'
  | 'b2m'
  | 'b2'
  | 'b3m'
  | 'b3'
  | 'c1'
  | 'c2'
  | 'btn'
  | 'tn'
  | 'code';

export type TextProps = PropsWithChildren<{
  as: TextAs;
  variant: TextVariant;
  margin?: string;
  padding?: string;
  color?: string;
  altColor?: string;
  display?: Display;
  align?: 'center' | 'left' | 'right';
}>;

const Component = styled.span<TextProps>(
  ({
    as,
    variant,
    margin,
    padding,
    color,
    altColor,
    display,
    align,
    theme,
  }) => ({
    ...(theme.TEXT[as] || {}),
    ...(theme.TYPOGRAPHY[variant] || {}),
    ...(margin ? { margin: getMargin({ theme, margin }) } : {}),
    ...(padding ? { padding: getMargin({ theme, margin: padding }) } : {}),
    ...(color ? { color: theme.COLOR[color] } : {}),
    ...(altColor ? { span: { color: theme.COLOR[altColor] } } : {}),
    ...(display ? { display } : {}),
    ...(align ? { textAlign: align } : {}),
  }),
);

export const Text = (props: TextProps) => <Component {...props} />;
