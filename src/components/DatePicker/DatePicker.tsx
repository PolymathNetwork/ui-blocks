import { FC, ComponentType, useState, forwardRef } from 'react';
import styled from 'styled-components';
import moment from 'moment';
import DateInputComponent from 'react-day-picker/DayPickerInput';
import { DayPickerProps, DayModifiers } from 'react-day-picker';
import 'react-day-picker/lib/style.css';

import { Input } from '../Input';
import { Box } from '../Box';
import { Flex } from '../Flex';
import { Button } from '../Button';
import { polyIcons } from '../../theme';

const formatDate = (date: Date | string, dateFormat: string) =>
  moment(date).format(dateFormat);

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

export const DatePicker: FC<DatePickerProps> = ({
  variant, // eslint-disable-line
  value,
  onChange,
  minDate,
  maxDate,
  hasIcon,
  noExpiryOption,
  noExpiryCopy = 'No expiry',
  dateFormat = 'MM/DD/YYYY',
  placeholder = 'mm/dd/yyyy',
  dayPickerProps = {},
  ...inputProps
}) => {
  const isNoExpiry =
    noExpiryOption &&
    (value === undefined || value === null || value === noExpiryCopy);
  const [currentSelected, setCurrentSelected] = useState(
    isNoExpiry
      ? noExpiryCopy
      : value === undefined
      ? undefined
      : formatDate(value || '', dateFormat)
  );

  const handleChange = (selectedDate: Date, modifiers: DayModifiers) => {
    if (modifiers.disabled) return;
    const formattedDate = formatDate(selectedDate, dateFormat);
    setCurrentSelected(formattedDate);
    if (onChange) onChange(selectedDate);
  };

  const handleNoExpiry = () => {
    setCurrentSelected(noExpiryCopy);
    if (onChange) onChange(null);
  };

  const Overlay = styled(Box)(({ theme }) => ({
    ...(theme.DATEPICKER || {}),
    position: 'absolute',
    zIndex: 1,
  }));

  const OverlayComponent = ({ children, ...overlayProps }: any) => (
    <Overlay {...overlayProps}>
      <Flex variant="raw" dir="column" align="center">
        {children}
        {noExpiryOption && (
          <Button variant="tertiary" margin="s 0 0 0" onClick={handleNoExpiry}>
            {noExpiryCopy}
          </Button>
        )}
      </Flex>
    </Overlay>
  );

  const Component = forwardRef(function CustomInput(p, ref) {
    return (
      <Input
        variant="basic"
        {...p}
        inputRef={ref}
        value={currentSelected}
        placeholder={placeholder}
        {...(hasIcon
          ? {
              icon: polyIcons.CalendarRange,
            }
          : {})}
        {...inputProps}
      />
    );
  });

  dayPickerProps.onDayClick = handleChange;
  if (currentSelected && currentSelected !== noExpiryCopy) {
    dayPickerProps.month = new Date(currentSelected);
    dayPickerProps.selectedDays = [new Date(currentSelected)];
  }
  if (minDate || maxDate) {
    if (minDate) dayPickerProps.fromMonth = minDate;
    if (maxDate) dayPickerProps.toMonth = maxDate;
    dayPickerProps.disabledDays = [
      ...(minDate ? [{ before: minDate }] : []),
      ...(maxDate ? [{ after: maxDate }] : []),
    ];
  }

  return (
    <DateInputComponent
      component={Component}
      overlayComponent={OverlayComponent}
      dayPickerProps={dayPickerProps}
    />
  );
};
