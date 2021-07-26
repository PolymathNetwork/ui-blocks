import { FC } from 'react';
import { components } from 'react-select';

import { polyIcons } from '../../theme';
import { Icon } from '../Icon';
import { DropdownIndicatorProps } from './types';

export const DropdownIndicator: FC<DropdownIndicatorProps> = (iProps) => {
  return (
    components.DropdownIndicator && (
      <components.DropdownIndicator {...iProps}>
        <Icon
          variant="basic"
          icon={polyIcons.ChevronDown}
          size="24px"
          color="gray3"
        />
      </components.DropdownIndicator>
    )
  );
};
