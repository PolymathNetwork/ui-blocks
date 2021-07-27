import { Display, Shadow } from '../../theme/types';

export type BoxVariant = 'raw' | 'basic' | 'border' | 'shadow';

export type BoxProps = {
  variant: BoxVariant;
  margin?: string;
  display?: Display;
  shadow?: Shadow;
};
