import { FC } from 'react';
import styled from 'styled-components';
import { Flex } from '../Flex';
import { getMargin, visuallyHidden } from '../../theme/utils';
import { Icon } from '../Icon';
import { polyIcons } from '../../theme';

export type CheckboxVariant = 'basic';

export type CheckboxProps = {
  variant: CheckboxVariant;
  margin?: string;
  onChange?: (e: boolean) => void;
  defaultChecked?: boolean;
  checked?: boolean;
  name?: React.AllHTMLAttributes<HTMLInputElement>['name'];
  label?: React.ComponentType | string;
  indeterminate?: boolean;
};

const Input = styled.input(visuallyHidden);

const CheckStateIcon = styled(Icon)<any>(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  display: 'block',
  visibility: 'hidden',
  opacity: 0,
  pointerEvents: 'none',
  margin: 'auto',
  transition: `150ms`,
}));

const CheckboxInput = styled.div(({ theme }) => ({
  position: 'relative',
  cursor: 'pointer',
  transition: `200ms`,
  boxSizing: 'border-box',
  border: `2px solid ${theme.COLOR.gray3}`,
  borderRadius: theme.RADIUS.s,
  width: '1.125rem',
  height: '1.125rem',
  backgroundColor: '#fff',
  userSelect: 'none',

  [`${Input}:focus + &`]: {
    borderColor: theme.COLOR.primary,
  },

  [`${Input}:checked:focus + &`]: {
    borderColor: theme.COLOR.primary,
  },

  [`${Input}:checked + &`]: {
    backgroundColor: theme.COLOR.primary,
    borderColor: theme.COLOR.primary,
  },

  [`${Input}:disabled + &`]: {
    borderColor: theme.COLOR.gray4,
  },

  [`${Input}:checked + & .checkIcon`]: {
    visibility: 'visible',
    opacity: 1,
  },

  '&.indeterminate': {
    borderColor: theme.COLOR.primary,

    '.minusIcon': {
      visibility: 'visible',
      opacity: 1,
    },

    '.checkIcon': {
      visibility: 'hidden',
      opacity: 0,
    },
  },
}));

export const Checkbox: FC<CheckboxProps> = ({
  variant,
  margin,
  name,
  defaultChecked,
  checked,
  onChange,
  label,
  indeterminate,
  ...props
}) => {
  const Component = styled.label(({ theme }) => ({
    ...(theme.CHECKBOX[variant] || {}),
    ...(margin && { margin: getMargin({ theme, margin }) }),
  }));

  const checkedProps =
    typeof checked !== 'undefined' ? { checked } : { defaultChecked };

  const handleChange = (e: any) => {
    if (onChange) {
      onChange(e.currentTarget.checked);
    }
  };

  return (
    <Component>
      <Flex variant="raw">
        <Input
          {...props}
          {...checkedProps}
          type="checkbox"
          id={name}
          name={name}
          onChange={handleChange}
        />
        <CheckboxInput
          {...(indeterminate ? { className: 'indeterminate' } : {})}
        >
          <CheckStateIcon
            variant="basic"
            size="1.5em"
            icon={polyIcons.CheckboxMarked}
            className="checkIcon"
          />
        </CheckboxInput>
        {label && (
          <Flex variant="raw" margin="0 0 0 10px">
            <label htmlFor={name}>{label}</label>
          </Flex>
        )}
      </Flex>
    </Component>
  );
};
