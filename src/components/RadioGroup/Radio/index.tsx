import React, { FC, useContext } from 'react';
import { Icon, IconProps } from '../../Icon';
import { polyIcons } from '../../../theme';
import { Text } from '../../Text';
import { Context } from '../Context';
import styled from 'styled-components';

export interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  checked?: boolean;
  name?: React.AllHTMLAttributes<HTMLInputElement>['name'];
  icon?: React.ComponentType<React.SVGAttributes<SVGElement>>;
  label?: React.ComponentType | string;
}

export const IconStyled = styled(Icon)<IconProps & {disabled: boolean | undefined, checked: boolean | undefined}>(({ theme, checked, disabled }) => ({
  border: `2px solid ${
    checked && !disabled ? theme.COLOR.brandMain : theme.COLOR.gray2
  }`,
  backgroundColor: 'transparent',
  svg: {
    visibility: checked ? 'visible' : 'hidden',
  },
}));

const StyledText = styled(Text)`
  display: flex;
  align-items: center;
  cursor: pointer;
`

const HiddenRadio = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
`

export const Radio: FC<Props> = (props) => {
  const {
    checked: checkedProp,
    name: nameProp,
    onChange,
    label,
    disabled,
    icon,
    ...other
  } = props;
  const radioGroup = useContext(Context);
  let checked = checkedProp;
  let name = nameProp;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event);
    }
    if (radioGroup) {
      radioGroup.onChange(event);
    }
  };

  if (radioGroup) {
    if (typeof checked === 'undefined') {
      checked = radioGroup.value === props.value;
    }
    if (typeof name === 'undefined') {
      name = radioGroup.name;
    }
  }

  return (
    <StyledText variant="label">
      <HiddenRadio
        type="radio"
        name={name}
        checked={checked}
        onChange={handleChange}
        disabled={disabled}
        {...other}
      />
      <IconStyled
        variant="circle"
        icon={icon || polyIcons.PointNew}
        color={disabled ? 'gray2' : 'brandMain'}
        size='20px'
        checked={checked}
        disabled={disabled}
      />
      <Text margin="0 5px" variant="span" color={disabled ? 'gray2' : 'highlightText'}>
        {label}
      </Text>
    </StyledText>
  );
};