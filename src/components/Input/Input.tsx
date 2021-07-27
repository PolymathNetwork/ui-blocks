import { FC, WheelEvent } from 'react';
import NumberInput from 'react-number-format';

import { Icon } from '../Icon';
import { Flex } from '../Flex';
import { Text } from '../Text';
import { InputProps } from './types';
import { InputWrapper, Component, Unit } from './styles';

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
        error={error}
        disabled={disabled}
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
        <Component as={isAmount ? NumberInput : 'input'} {...componentProps} />
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
