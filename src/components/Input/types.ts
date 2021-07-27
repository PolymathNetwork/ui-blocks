import { ComponentType } from 'react';

import { IconType } from '../../theme/types';
import { GridProps } from '../Grid/types';

export type InputVariant = 'basic' | 'amount';

export type InputProps = {
  variant: InputVariant;
  margin?: string;
  id?: string;
  name?: string;
  type?: 'text' | 'password' | 'email';
  disabled?: boolean;
  label?: string;
  placeholder?: string;
  value?: string | null;
  onChange?: (state: any) => void;
  tooltip?: string | ComponentType;
  icon?: IconType;
  unit?: string;
  error?: string;
  isDivisible?: boolean;
  inputRef?: any;
};

export type InputWrapperProps = GridProps & {
  error?: string;
  disabled?: boolean;
};
