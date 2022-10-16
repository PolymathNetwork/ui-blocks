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
  disabled?: boolean;
  name?: string;
  label?: React.ComponentType | JSX.Element | string;
  indeterminate?: boolean;
};

const Input = styled.input(visuallyHidden);

const CheckStateIcon = styled(Icon)<any>(({theme, variant, disabled}) => ({
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
  'svg > *': {
    ...theme.ICON[variant]['svg > *'],
    ...(theme.ICON[variant].fill
      ? { fill: disabled ? `${theme.COLOR.gray8}` : `${theme.COLOR.brandMain}` }
      : {}),
  },
 
} 
));

const MinusBoxIcon = styled(Icon)<any>(({theme, variant, disabled}) => ({
  position: 'absolute',
  top: '73%',
  left: '73%',
  transform: 'translate(-50%, -50%)',
  display: 'block',
  visibility: 'hidden',
  opacity: 0,
  pointerEvents: 'none',
  margin: 'auto',
  transition: `150ms`,
  'svg > *': {
    ...theme.ICON[variant]['svg > *'],
    ...(theme.ICON[variant].fill
      ? { fill: disabled ? `${theme.COLOR.gray8}` : `${theme.COLOR.brandMain}` }
      : {}),
  },

}));

const CheckboxInput = styled.div<{disabled: boolean}>(({ theme, disabled }) => ({
  position: 'relative',
  cursor: 'pointer',
  transition: `200ms`,
  boxSizing: 'border-box',
  border: '2px solid',
  borderColor: disabled ? theme.COLOR.gray8 : theme.COLOR.gray9,
  borderRadius: theme.RADIUS.s,
  minWidth: '1.125rem',
  minHeight: '1.125rem',
  backgroundColor: '#fff',
  userSelect: 'none',
  [`${Input}:focus + &`]: {
    border: '2px solid',
    borderColor: theme.COLOR.utilityFocus,
    position: 'relative',
    padding: disabled? '0px' : '12px',
    zIndex: '1',
  },

  [`${Input}:checked:focus + &`]: {
    position: 'relative',
    border: '2px solid',
    borderColor: theme.COLOR.utilityFocus,
    padding: disabled? '0px' : '12px',
    '&:after': {
      border: '0px solid',
    }
  },
  [`${Input}:checked + &`]: {
    borderColor: theme.COLOR.brandMain,
  },


  [`${Input}:checked + & .checkIcon`]: {
    visibility: 'visible',
    opacity: 1,
  },
  [`${Input}:focus + & .minusIcon`]: {
    visibility: 'visible',
    top: '60%',
    left: '60%',
  },
 
 
  '&.indeterminate': {
    borderColor: theme.COLOR.brandMain,

    '.minusIcon': {
      visibility: 'visible',
      opacity: 1,
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
      disabled,
      ...props
    } = checkboxProps;

    const checkedProps = typeof checked !== 'undefined' ? { checked } : { defaultChecked };
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
          disabled={disabled}
            {...(indeterminate ? { className: 'indeterminate' } : {})}
          >
            <MinusBoxIcon
              variant="basic"
              size="1.5em"
              icon={polyIcons.MinusBox}
              disabled={disabled}
              className="minusIcon"
            />
            <CheckStateIcon
              variant="basic"
              size="1.5em"
              icon={polyIcons.CheckboxMarked}
              disabled={disabled}
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
