import { IconType } from '../../theme/types';

export type IconVariant = 'basic' | 'circle';

export type IconProps = {
  variant: IconVariant;
  margin?: string;
  icon: IconType;
  size: string;
  color?: string;
  bg?: string;
  scale?: number;
  rotate?: string;
};
