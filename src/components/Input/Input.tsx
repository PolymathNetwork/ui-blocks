import { WheelEvent, ComponentType, forwardRef } from 'react';
import styled from 'styled-components';
import NumberInput from 'react-number-format';

import { getMargin } from '../../theme/utils';
import { Grid, GridProps } from '../Grid';
import { Icon } from '../Icon';
import { Flex } from '../Flex';
import { Box } from '../Box';
import { Text } from '../Text';
import { Tooltip } from '../Tooltip';

export type InputVariant = 'basic' | 'amount';
export enum IconPosition {
  Left = 'left',
  Right = 'right',
}
export enum LablePosition {
  Top = 'top',
  Left = 'left',
}

export type InputProps = {
  variant: InputVariant;
  margin?: string;
  width?: string;
  id?: string;
  name?: string;
  type?: 'text' | 'password' | 'email';
  disabled?: boolean;
  label?: string;
  labelPosition?: LablePosition;
  placeholder?: string;
  value?: string | null;
  onChange?: (state: any) => void;
  tooltip?: string | ComponentType;
  icon?: ComponentType;
  iconPosition?: IconPosition;
  unit?: string;
  error?: string;
  isDivisible?: boolean;
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
    ...(error
      ? {
          borderColor: theme.COLOR.danger2,
          background: theme.COLOR.danger3,
          input: {
            background: theme.COLOR.danger3,
          },
        }
      : {}),
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

const InputComponent = styled.input(({ theme, readOnly }) => ({
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

export const Input = forwardRef<HTMLInputElement, InputProps>(
  function ForwardRefInput(inputProps, ref) {
    const {
      variant,
      margin,
      width,
      type,
      label,
      labelPosition = LablePosition.Top,
      tooltip,
      icon,
      unit,
      error,
      isDivisible = true,
      disabled,
      readOnly,
      iconPosition,
      inputRef,
      ...props
    } = inputProps;

    const isBasic = variant === 'basic';
    const isAmount = variant === 'amount';

    const componentProps = {
      ...props,
      disabled,
      readOnly,
      ...(isBasic ? { type } : {}),
      ...(isAmount
        ? {
            thousandSeparator: true,
            allowNegative: false,
            decimalScale: isDivisible ? 6 : 0,
            onWheel: (e: WheelEvent<HTMLInputElement>) => {
              e.currentTarget.blur();
            },
          }
        : {}),
    };

    const renderIcon = (
      _icon: ComponentType,
      _iconPosition: IconPosition = IconPosition.Left,
      _disabled = false,
    ) => (
      <Icon
        icon={_icon}
        variant="basic"
        size="24px"
        color={_disabled ? 'gray4' : 'gray3'}
        margin={_iconPosition === IconPosition.Left ? '0 s 0 0' : '0'}
      />
    );

    return (
      <Flex
        width={width ? width : "fit-content"}
        variant="basic"
        align={labelPosition === LablePosition.Left ? 'center' : 'start'}
        dir={labelPosition === LablePosition.Left ? 'row' : 'column'}
        margin={margin}
      >
        <Box
          width="100%"
          variant="raw"
          display="block"
          margin={labelPosition === LablePosition.Left ? '0 8px 0 0' : ''}
        >
          {label && (
            <Flex
              align="center"
              variant="raw"
              justify={tooltip ? 'spaced' : 'start'}
            >
              <Text
                as="span"
                variant="b2m"
                color={disabled ? 'gray3' : 'gray1'}
              >
                {label}
              </Text>
              {tooltip && <Tooltip variant="icon" content={tooltip} />}
            </Flex>
          )}
        </Box>
        <InputWrapper
          width="100%"
          variant="raw"
          align="center"
          cols={`${icon ? 'auto ' : ''}1fr${unit ? ' auto' : ''}`}
          error={error}
          disabled={disabled}
          readOnly={readOnly}
        >
          {icon &&
            (!iconPosition || iconPosition === IconPosition.Left) &&
            renderIcon(icon, iconPosition, disabled)}
          <InputComponent
            {...(inputRef ? inputRef : {ref})}
            as={isAmount ? NumberInput : 'input'}
            {...componentProps}
          />
          {icon &&
            iconPosition === IconPosition.Right &&
            renderIcon(icon, iconPosition, disabled)}
          {unit && <Unit>{unit}</Unit>}
        </InputWrapper>
        {error && (
          <Text as="span" variant="b3" color="danger2">
            {error}
          </Text>
        )}
      </Flex>
    );
  },
);
