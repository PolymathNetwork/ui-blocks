import { IconType } from '../../theme/types';

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'inline';

export type ButtonProps = {
  variant: ButtonVariant;
  margin?: string;
  id?: string;
  size?: 's' | 'm' | 'l';
  disabled?: boolean;
  icon?: IconType;
  onClick?: () => void;
};
