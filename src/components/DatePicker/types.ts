import { BoxVariant } from 'components/Box/types';
import { ComponentType } from 'react';
import { DayPickerProps } from 'react-day-picker';

export type DatePickerVariant = 'basic';

export type DatePickerProps = {
  variant: DatePickerVariant;
  margin?: string;
  id?: string;
  name?: string;
  disabled?: boolean;
  label?: string;
  placeholder?: string;
  value?: string | null;
  onChange?: (state: any) => void;
  tooltip?: string | ComponentType;
  error?: string;
  noExpiryOption?: boolean;
  noExpiryCopy?: string;
  minDate?: Date;
  maxDate?: Date;
  hasIcon?: boolean;
  dateFormat?: string;
  dayPickerProps?: Partial<DayPickerProps>;
};

export type OverlayComponentProps = {
  noExpiryOption: boolean;
  noExpiryCopy: string;
  handleNoExpiry: () => void;
  variant: BoxVariant;
};
