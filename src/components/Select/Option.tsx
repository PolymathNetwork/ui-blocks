import { FC } from 'react';
import { components } from 'react-select';

import { polyIcons } from '../../theme';
import { Icon } from '../Icon';
import { SelectOptionProps } from './types';

export const Option: FC<SelectOptionProps> = ({ children, ...props }) => (
  <components.Option {...props} isDisabled>
    {!props.selectProps.noIcon && (
      <Icon
        variant="basic"
        icon={polyIcons.Image}
        size="22px"
        color="gray3"
        margin="0 s -5px l"
      />
    )}
    {children}
    {/* {oProps.isDisabled && oProps.selectProps.disabledOptionText && (
        <Tooltip>{oProps.selectProps.disabledOptionText}</Tooltip>
      )} */}
  </components.Option>
);
