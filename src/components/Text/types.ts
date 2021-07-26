import { TextFormat } from '../../theme/types';

export type TextVariant = 'p' | 'span' | 'label';

export type TextProps = {
  variant: TextVariant;
  margin?: string;
  format?: TextFormat;
  color?: string;
  altColor?: string;
  display?: 'block' | 'inline-block' | 'inline' | 'none';
};
