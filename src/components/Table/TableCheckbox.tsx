import { FC, useEffect } from 'react';

import { Box } from '../Box';
// import { Checkbox } from '../Checkbox';
import { TableCheckboxProps } from './TableTypes';

const Checkbox = (props: any) => <input type="checkbox" {...props} />;

export const TableCheckbox: FC<TableCheckboxProps> = ({
  onChange,
  setShowBatchActions,
  indeterminate,
  checked,
  ...rest
}) => {
  useEffect(() => {
    if (setShowBatchActions) {
      setShowBatchActions(indeterminate || checked);
    }
  }, [setShowBatchActions, indeterminate, checked]);

  const handleChange = (state: boolean) => {
    const event = { target: { value: state } };
    onChange(event);
  };

  return (
    <Box variant="raw" margin="s 0 0 0">
      <Checkbox
        onChange={handleChange}
        indeterminate={indeterminate}
        checked={checked}
        {...rest}
      />
    </Box>
  );
};
