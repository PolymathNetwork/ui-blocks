import { Justify, Align } from '../../theme/types';
import { BoxVariant, BoxProps } from '../Box/types';

export type FlexVariant = BoxVariant;

export type FlexProps = BoxProps & {
  justify?: Justify;
  align?: Align;
  dir?: 'row' | 'column';
};
