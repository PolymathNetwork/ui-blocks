import React, { useState } from 'react';
import { RadioGroup } from '.';
import { Radio } from './Radio';
import { polyIcons } from '../../theme';
import { Box } from '../Box'

export default {
  title: 'Polyblocks/Radio Group',
  component: RadioGroup,
};

export const Default = () => {
  const [value, setValue] = useState('opt1');
  const [valueIcon, setValueIcon] = useState('optIcon1');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const handleChangeIcon = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValueIcon(e.target.value);
  };
  return (
    <>
      <Box variant="basic" >
        <RadioGroup onChange={handleChange} value={value}>
          <Box variant="raw" >
            <Radio value="opt1" label="Option 1 default icon" />
          </Box>
          <Box margin="5px 0" variant="raw" >
            <Radio value="opt2" label="Option 2 default icon" />
          </Box>
        </RadioGroup>
      </Box>
      <Box variant="basic" >
        <RadioGroup onChange={handleChangeIcon} value={valueIcon}>
          <Box variant="raw" >
            <Radio
              icon={polyIcons.CheckboxMarkedCircle}
              value="optIcon1"
              label="Option 1 with icon"
            />
          </Box>
          <Box margin="5px 0" variant="raw" >
            <Radio
              icon={polyIcons.CheckboxMarkedCircle}
              value="optIcon2"
              label="Option 2 with icon"
            />
          </Box>
        </RadioGroup>
      </Box>
    </>
  );
};