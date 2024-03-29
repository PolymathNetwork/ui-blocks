import { ChangeEventHandler, forwardRef, Fragment } from 'react';
import styled from 'styled-components';
import { Flex } from '../Flex';
import { getMargin, visuallyHidden } from '../../theme/utils';
import { Icon } from '../Icon';
import { polyIcons } from '../../theme';

export type CheckboxVariant = 'basic';

export type CheckboxProps = {
  variant: CheckboxVariant;
  margin?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  defaultChecked?: boolean;
  checked?: boolean;
  name?: string;
  label?: React.ComponentType | JSX.Element | string;
  indeterminate?: boolean;
};

const Input = styled.input(visuallyHidden);

const CheckStateIcon = styled(Icon)<any>(() => ({
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

const MinusBoxIcon = styled(Icon)<any>(() => ({
  position: 'absolute',
  top: '71%',
  left: '71%',
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
  minWidth: '1.125rem',
  minHeight: '1.125rem',
  backgroundColor: '#fff',
  userSelect: 'none',

  [`${Input}:focus + &`]: {
    borderColor: theme.COLOR.brandMain,
  },

  [`${Input}:checked:focus + &`]: {
    borderColor: theme.COLOR.gray5,
  },

  [`${Input}:checked + &`]: {
    backgroundColor: theme.COLOR.gray5,
    borderColor: theme.COLOR.brandMain,
  },

  [`${Input}:disabled + &`]: {
    borderColor: theme.COLOR.gray4,
  },

  [`${Input}:checked + & .checkIcon`]: {
    visibility: 'visible',
    opacity: 1,
  },

  '&.indeterminate': {
    borderColor: theme.COLOR.brandMain,

    '.minusIcon': {
      visibility: 'visible',
      opacity: 1,
      background: theme.COLOR.light,
    },

    '.checkIcon': {
      visibility: 'hidden',
      opacity: 0,
      background: theme.COLOR.light,
    },
  },
}));

const LabelComponent = styled.label<{ variant: string; margin?: string }>(
  ({ theme, variant, margin }) => ({
    ...(theme.CHECKBOX[variant] || {}),
    ...(margin
      ? {
          display: 'inline-block',
          margin: getMargin({ theme, margin }),
        }
      : {}),
  }),
);

const Label = styled(Flex)<any>(({ theme }) => ({
  ...(theme.CHECKBOX['labelMargin'] || {}),
  paddingTop: '1px',
}));

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  function ForwardRefCheckbox(checkboxProps, ref) {
    const {
      variant,
      margin,
      defaultChecked,
      checked,
      label,
      indeterminate,
      name,
      ...props
    } = checkboxProps;

    const checkedProps =
      typeof checked !== 'undefined' ? { checked } : { defaultChecked };

    return (
      <LabelComponent variant={variant} margin={margin}>
        <Flex variant="raw" align="center">
          <Input
            {...props}
            {...checkedProps}
            ref={ref}
            id={name}
            name={name}
            type="checkbox"
          />
          <CheckboxInput
            {...(indeterminate ? { className: 'indeterminate' } : {})}
          >
            <MinusBoxIcon
              variant="basic"
              size="1.5em"
              icon={polyIcons.MinusBox}
              className="minusIcon"
            />
            <CheckStateIcon
              variant="basic"
              size="1.5em"
              icon={polyIcons.CheckboxMarked}
              className="checkIcon"
            />
          </CheckboxInput>
          <Fragment key={`${name}Label`}>
            {typeof label === 'string' ? (
              <Label variant="raw">{label}</Label>
            ) : (
              label
            )}
          </Fragment>
        </Flex>
      </LabelComponent>
    );
  },
);
