import { FC, ComponentType, WheelEvent } from 'react';
import styled from 'styled-components';
import NumberInput from 'react-number-format';

import { getMargin } from '../../theme/utils';
import { IconType } from '../../theme/types';
import { Icon } from '../Icon';
import { Grid } from '../Grid';
import { Flex } from '../Flex';
import { Text } from '../Text';

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
  disabled,
  ...props
}) => {
  const isBasic = variant === 'basic';
  const isAmount = variant === 'amount';

  const InputWrapper = styled(Grid)(({ theme }) => ({
    backgroundColor: (theme.INPUT || { backgroundColor: 'unset' })
      .backgroundColor,
    padding: (theme.INPUT || { padding: 0 }).padding,
    border: (theme.INPUT || { border: 0 }).border,
    borderRadius: (theme.INPUT || { borderRadius: 0 }).borderRadius,
    transition: (theme.INPUT || { transition: 'unset' }).transition,
    ...(error ? { borderColor: theme.COLOR.danger } : {}),
    ...(theme.INPUT && theme.INPUT['&:focus']
      ? { '&:focus-within': theme.INPUT['&:focus'] }
      : {}),
    ...(disabled && theme.INPUT && theme.INPUT['&:disabled']
      ? theme.INPUT['&:disabled']
      : {}),
  }));
  const Unit = styled.div(({ theme }) => ({
    margin: getMargin({ theme, margin: '0 0 0 s' }),
    padding: 0,
    color: theme.COLOR.gray3,
  }));

  const Component = styled(isAmount ? NumberInput : 'input')(({ theme }) => ({
    ...(theme.INPUT || {}),
    margin: 0,
    padding: 0,
    border: 0,
    borderRadius: 0,
    borderColor: 'transparent',
    WebkitAppearance: 'none',
    outline: 'none',
  }));
  const componentProps = {
    ...props,
    disabled,
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

  return (
    <Text variant="label" display="block" margin={margin}>
      {label && tooltip && (
        <Flex variant="raw" justify={tooltip ? 'spaced' : 'start'}>
          <Text variant="span" format="b2m">
            {label}
          </Text>
          {tooltip && (
            // TODO: Pass `tooltip` as content to Tooltip component
            <img
              title={tooltip as string}
              src="https://upload.wikimedia.org/wikipedia/commons/5/5f/OOjs_UI_icon_info-progressive.svg"
              width="18px"
              height="18px"
            />
          )}
        </Flex>
      )}
      <InputWrapper
        variant="raw"
        align="center"
        cols={`${icon ? 'auto ' : ''}1fr${unit ? ' auto' : ''}`}
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
        <Component {...componentProps} />
        {unit && <Unit>{unit}</Unit>}
      </InputWrapper>
      {error && (
        <Text variant="span" format="b3" color="danger">
          {error}
        </Text>
      )}
    </Text>
  );
};
