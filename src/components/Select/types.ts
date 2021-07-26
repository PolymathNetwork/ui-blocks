import { ComponentProps, ComponentType } from 'react';
import { OptionsType, GroupedOptionsType, components } from 'react-select';

import { OptionType } from '../../theme/types';

export type SelectVariant = 'basic';

export type SelectProps = {
  variant: SelectVariant;
  margin?: string;
  id?: string;
  name?: string;
  label?: string;
  tooltip?: string | ComponentType;
  disabled?: boolean;
  noIcon?: boolean;
  inputRef?: any;
  onChange?: (value: any) => void;
  placeholder?: string;
  value?: OptionType;
  options: OptionsType<OptionType> | GroupedOptionsType<OptionType>;
  // disabledOptionText?: string;
};

export type SelectOptionProps = ComponentProps<typeof components.Option>;

export type DropdownIndicatorProps = ComponentProps<
  typeof components.DropdownIndicator
>;
