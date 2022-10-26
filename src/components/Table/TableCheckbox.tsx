import { useEffect } from 'react';

import { Box } from '../Box';
// import { Checkbox } from '../Checkbox';
import { TableCheckboxProps } from './TableTypes';

const Checkbox = (props: any) => <input type="checkbox" {...props} />;

export const TableCheckbox = ({
  onChange,
  setShowBatchActions,
  indeterminate,
  checked,
  ...rest
}: TableCheckboxProps) => {
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
    <Box variant="raw">
      <Checkbox
        onChange={handleChange}
        indeterminate={indeterminate}
        checked={checked}
        {...rest}
      />
    </Box>
  );
};
