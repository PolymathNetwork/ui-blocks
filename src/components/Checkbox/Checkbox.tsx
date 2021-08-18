import { FC } from 'react';
import styled from 'styled-components';
import { Icon } from '../Icon';
import { polyIcons } from '../../theme';
import { Box } from '../Box';
import { Text } from '../Text';

export type CheckboxProps = {
  checked: boolean;
  onClick?: (e: boolean) => void;
  label?: React.ComponentType | string;
};

const CheckboxContainer = styled.div`
  cursor: pointer;
  display: inline-flex;
  align-items: center;
`

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  height: 0px;
  position: absolute;
  width: 0px;
`

const Component = (props: CheckboxProps) => {
  const { onClick, label } = props;
  const handleChange = (e: any) => {
    if (onClick) {
      onClick(e.currentTarget.checked);
    }
  };
  return (
    <CheckboxContainer>
      <HiddenCheckbox onClick={handleChange} />
      <Box display="inherit" variant="raw">
        {!props.checked && (
          <Icon
            variant="basic"
            icon={polyIcons.CheckboxBlankOutline}
            size='32px'
          />
        )}
        {props.checked && (
          <Icon
            variant="basic"
            icon={polyIcons.CheckboxMarked}
            size='32px'
          />
        )}
      </Box>
      {label && (
        <Text variant="label">{label}</Text>
      )}
    </CheckboxContainer>
  )
};

export const Checkbox: FC<CheckboxProps> = (props) => {
  return <Component {...props} />;
};
