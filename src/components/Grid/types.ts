import { BoxProps, BoxVariant } from '../Box/types';
import { FlexProps, FlexVariant } from '../Flex/types';
import { Justify, Align } from '../../theme/types';

export type GridVariant = BoxVariant;

export type GridProps = BoxProps & {
  justify?: Justify;
  align?: Align;
  cols?: string;
  rows?: string;
  gap?: string;
};

export type GridItemProps = BoxProps &
  FlexProps &
  GridProps & {
    as: 'Box' | 'Flex' | 'Grid';
    variant: BoxVariant | FlexVariant | GridVariant;
    area: string;
  };
