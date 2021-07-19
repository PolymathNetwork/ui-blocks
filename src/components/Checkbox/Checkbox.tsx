import { FC } from 'react';
import styled from 'styled-components';
import { Flex } from '../Flex';
import { getMargin, visuallyHidden } from '../../theme/utils';
import { Icon } from '../Icon';
import { polyIcons } from '../../theme';

export type CheckboxProps = {
  margin?: string;
  onChange?: (e: boolean) => void;
  defaultChecked?: boolean;
  checked?: boolean;
  name?: React.AllHTMLAttributes<HTMLInputElement>['name'];
  label?: React.ComponentType | string;
  indeterminate?: boolean;
};

const Input = styled.input(visuallyHidden);

const CheckStateIcon = styled(Icon)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  display: 'block',
  visibility: 'hidden',
  opacity: 0,
  pointerEvents: 'none',
  margin: 'auto',
  transition: `${theme.TRANSITION.hover.ms}ms`,
}));

const CheckboxInput = styled.div(({ theme }) => ({
  position: 'relative',
  cursor: 'pointer',
  transition: `${theme.TRANSITION.hover.ms}ms`,
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
    backgroundColor: 'theme.COLOR.primary',
    borderColor: 'theme.COLOR.primary',
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
    ...(theme.CHECKBOX || {}),
    ...(margin && { margin: getMargin({ theme, margin }) }),
  }));

  let checkedProps;

  if (typeof checked !== 'undefined') {
    checkedProps = { checked };
  } else {
    checkedProps = { defaultChecked };
  }

  const handleChange = (e: any) => {
    if (onChange) {
      onChange(e.currentTarget.checked);
    }
  };

  return (
    <Component>
      <Flex display="inline-flex">
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
            icon={polyIcons.Checkmark}
            size="0.9em"
            variant="basic"
            className="checkIcon"
          />
        </CheckboxInput>
        {label && (
          <Flex display="inline-flex" margin="0 0 0 10px">
            <label htmlFor={name}>{label}</label>
          </Flex>
        )}
      </Flex>
    </Component>
  );
};
