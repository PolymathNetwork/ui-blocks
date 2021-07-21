import { FC, useState, forwardRef } from 'react';
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
  tooltip?: string; // | JSX.Element;
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
  dayPickerProps,
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
  const pickerProps = dayPickerProps || {};

  if (minDate || maxDate) {
    if (minDate) pickerProps.fromMonth = minDate;
    if (maxDate) pickerProps.toMonth = maxDate;
    pickerProps.disabledDays = [
      ...(minDate ? [{ before: minDate }] : []),
      ...(maxDate ? [{ after: maxDate }] : []),
    ];
  }

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
    position: 'absolute',
    padding: theme.GAP.s,
    backgroundColor: theme.COLOR.light,
    border: `1px solid ${theme.COLOR.grary4}`,
    borderRadius: theme.RADIUS.l,
    boxShadow: theme.SHADOW[3],
    lineHeight: 'normal',
    zIndex: 1,
    '.DayPicker': {
      '&-wrapper': {
        margin: 0,
        padding: 0,
      },
      '&-NavButton': {
        margin: 0,
        padding: 0,
        backgroundImage: 'none',
        borderStyle: 'solid',
        borderWidth: '2px 2px 0 0',
        height: '7px',
        width: '7px',
        color: theme.COLOR.gray2,
        top: '20px',
        right: '10px',
        transform: 'rotate(45deg)',
        '&--prev': {
          right: '50px',
          transform: 'rotate(-135deg)',
        },
      },
      '&-Month': {
        margin: 0,
      },
      '&-Caption': {
        color: theme.COLOR.gray2,
        fontSize: theme.TYPOGRAPHY.b3,
        paddingTop: '15px',
        marginBottom: '20px',
      },
      '&-Day': {
        margin: 0,
        padding: 0,
        borderRadius: 0,
        lineHeight: '30px',
        width: '20px',
        fontSize: theme.TYPOGRAPHY.b3,
        color: theme.COLOR.gray1,
        '&--selected': {
          backgroundColor: theme.COLOR.brandMain,
        },
        '&--disabled': {
          color: theme.COLOR.gray4,
        },
        '&--outside': {
          color: theme.COLOR.gray2,
        },
      },
    },
  }));

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
              icon: polyIcons.Bull, // TODO: Use calendar icon
            }
          : {})}
        {...inputProps}
      />
    );
  });

  return (
    <DateInputComponent
      component={Component}
      overlayComponent={({ children, ...overlayProps }: any) => (
        <Overlay {...overlayProps}>
          <Flex variant="raw" dir="column" align="center">
            {children}
            {noExpiryOption && (
              <Button
                variant="tertiary"
                margin="s 0 0 0"
                onClick={handleNoExpiry}
              >
                {noExpiryCopy}
              </Button>
            )}
          </Flex>
        </Overlay>
      )}
      dayPickerProps={{
        onDayClick: handleChange,
        month:
          currentSelected && currentSelected !== noExpiryCopy
            ? new Date(currentSelected)
            : undefined,
        selectedDays:
          currentSelected && currentSelected !== noExpiryCopy
            ? [new Date(currentSelected)]
            : undefined,
        ...pickerProps,
      }}
    />
  );
};
