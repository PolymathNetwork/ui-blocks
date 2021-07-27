import { FC, useState, forwardRef } from 'react';
import moment from 'moment';
import DateInputComponent from 'react-day-picker/DayPickerInput';
import { DayModifiers } from 'react-day-picker';
import 'react-day-picker/lib/style.css';

import { Input } from '../Input';
import { polyIcons } from '../../theme';
import { DatePickerProps } from './types';
import { OverlayComponent } from './OverlayComponent';

const formatDate = (date: Date | string, dateFormat: string) =>
  moment(date).format(dateFormat);

export const DatePicker: FC<DatePickerProps> = ({
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

  // @FIXME @BUG: overlay does not close after clicking no-expiry button
  const handleNoExpiry = () => {
    setCurrentSelected(noExpiryCopy);
    if (onChange) onChange(null);
  };

  const Component = forwardRef(function CustomInput(p, ref) {
    return (
      <Input
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
      dayPickerProps={dayPickerProps}
      overlayComponent={(props: any) => (
        <OverlayComponent
          {...props}
          noExpiryOption={noExpiryOption}
          noExpiryCopy={noExpiryCopy}
          handleNoExpiry={handleNoExpiry}
        />
      )}
    />
  );
};
