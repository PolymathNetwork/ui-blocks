import { ChangeEventHandler, forwardRef, Fragment } from 'react';
import styled from 'styled-components';
import { Flex } from '../Flex';
import { getMargin, visuallyHidden } from '../../theme/utils';
import { Icon } from '../Icon';
import { polyIcons } from '../../theme';
import { width } from 'styled-system';

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
// const LabelComponent = styled.label<{ variant: string; margin?: string }>(
//   ({ theme, variant, margin }) => ({
//     ...(theme.CHECKBOX[variant] || {}),
//     ...(margin
//       ? {
//           display: 'inline-block',
//           margin: getMargin({ theme, margin }),
//         }
//       : {}),
//   }),
// );
const CheckboxInput = styled.div<{disabled: boolean}>(({ theme, disabled }) => ({
  position: 'relative',
  cursor: 'pointer',
  transition: `200ms`,
  boxSizing: 'border-box',
  border: `2px solid ${disabled ? 'blue' : 'red'}`,
  borderRadius: theme.RADIUS.s,
  minWidth: '1.125rem',
  minHeight: '1.125rem',
  backgroundColor: '#fff',
  userSelect: 'none',
  [`${Input}:focus + &`]: {
    border: `2px solid #5B9EF8`,
    position: 'relative',
    padding: '12px',
    zIndex: '1',
  },

  [`${Input}:checked:focus + &`]: {
    border: `2px solid #5B9EF8`,
    padding: '12px',
  },
  [`${Input}:checked:focus + ::before + &`]: {
      backgroundColor: 'red',
      content: ' ',
      position: 'absolute',
      zIndex: '-1',
      top: '5px',
      left: '5px',
      right: '5px',
      bottom: '5px',
      border: '115px solid #ffea00'
  },
  [`${Input}:checked:disabled + &`]: {
    backgroundColor: 'red',
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
      disabled,
      ...props
    } = checkboxProps;

    const checkedProps =
      typeof checked !== 'undefined' ? { checked } : { defaultChecked };
    const isDisabled = true
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
           disabled={!isDisabled}
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
          <div></div>
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
