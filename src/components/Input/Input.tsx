import { FC, WheelEvent, ComponentType } from 'react';
import styled from 'styled-components';
import NumberInput from 'react-number-format';

import { getMargin } from '../../theme/utils';
import { Grid, GridProps } from '../Grid';
import { Icon } from '../Icon';
import { Flex } from '../Flex';
import { Text } from '../Text';
import { Tooltip } from '../Tooltip';

export type InputVariant = 'basic' | 'amount';

export type InputProps = {
  variant: InputVariant;
  margin?: string;
  id?: string;
  name?: string;
  type?: 'text' | 'password' | 'email' | 'phone';
  disabled?: boolean;
  label?: string;
  placeholder?: string;
  value?: string | null;
  onChange?: (state: any) => void;
  tooltip?: string | ComponentType;
  icon?: ComponentType;
  unit?: string;
  error?: string;
  countryCode?: string;
  isDivisible?: boolean;
  thousandSeparator?: boolean;
  inputRef?: any;
  readOnly?: boolean;
};

export type InputWrapperProps = GridProps & {
  error?: string;
  disabled?: boolean;
  readOnly?: boolean;
};

const InputWrapper = styled(Grid)<InputWrapperProps>(
  ({ theme, error, disabled, readOnly }) => ({
    backgroundColor: (theme.INPUT || { backgroundColor: 'unset' })
      .backgroundColor,
    padding: (theme.INPUT || { padding: 0 }).padding,
    border: (theme.INPUT || { border: 0 }).border,
    borderRadius: (theme.INPUT || { borderRadius: 0 }).borderRadius,
    transition: (theme.INPUT || { transition: 'unset' }).transition,
    ...(error ? { borderColor: theme.COLOR.danger } : {}),
    ...(!disabled && theme.INPUT && theme.INPUT['&:hover']
      ? { '&:hover': theme.INPUT['&:hover'] }
      : {}),
    ...(theme.INPUT && theme.INPUT['&:focus']
      ? { '&:focus-within': theme.INPUT['&:focus'] }
      : {}),
    ...(disabled && theme.INPUT && theme.INPUT['&:disabled']
      ? theme.INPUT['&:disabled']
      : {}),
    ...(readOnly && theme.INPUT && theme.INPUT['&:readOnly']
      ? theme.INPUT['&:readOnly']
      : {}),
  }),
);

const Component = styled.input(({ theme, readOnly }) => ({
  ...(theme.INPUT || {}),
  margin: 0,
  padding: 0,
  border: 0,
  borderRadius: 0,
  borderColor: 'transparent',
  WebkitAppearance: 'none',
  outline: 'none',
  ...(readOnly
    ? { backgroundColor: theme.INPUT['&:readOnly'].backgroundColor }
    : {}),
}));

const Unit = styled.div(({ theme }) => ({
  margin: getMargin({ theme, margin: '0 0 0 s' }),
  padding: 0,
  color: theme.COLOR.gray3,
}));

export const Input: FC<InputProps> = ({
  variant,
  margin,
  type,
  label,
  tooltip,
  icon,
  unit,
  error,
  isDivisible = true,
  thousandSeparator = true,
  countryCode = '+1',
  disabled,
  readOnly,
  ...props
}) => {
  const isBasic = variant === 'basic';
  const isAmount = variant === 'amount';

  const componentProps = {
    ...props,
    disabled,
    readOnly,
    ...(isBasic ? { type } : {}),
    ...(isAmount
      ? {
          thousandSeparator,
          allowNegative: false,
          decimalScale: isDivisible ? 6 : 0,
          onWheel: (e: WheelEvent<HTMLInputElement>) => {
            e.currentTarget.blur();
          },
        }
      : {}),
  };

  return (
    <Text as="label" variant="b2m" display="block" margin={margin}>
      {label && tooltip && (
        <Flex variant="raw" justify={tooltip ? 'spaced' : 'start'}>
          <Text as="span" variant="b2m" color={disabled ? 'gray4' : 'gray1'}>
            {label}
          </Text>
          {tooltip && <Tooltip variant="icon" content={tooltip} />}
        </Flex>
      )}
      <InputWrapper
        variant="raw"
        align="center"
        cols={`${icon ? 'auto ' : ''}1fr${unit ? ' auto' : ''}`}
        error={error}
        disabled={disabled}
        readOnly={readOnly}
      >
        {icon && (
          <Icon
            icon={icon}
            variant="basic"
            size="24px"
            color="gray3"
            margin="0 s 0 0"
          />
        )}
        <Component
          as={isAmount ? NumberInput : 'input'}
          {...(type === 'phone'
            ? { format: `${countryCode} (###) ###-####`, mask: '_' }
            : {})}
          {...componentProps}
        />
        {unit && <Unit>{unit}</Unit>}
      </InputWrapper>
      {error && (
        <Text as="span" variant="b3" color="danger">
          {error}
        </Text>
      )}
    </Text>
  );
};
