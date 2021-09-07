import { useState, ComponentProps } from 'react';
import { Story } from '@storybook/react';
import { Radio } from './Radio';
import { polyIcons } from '../../themeSettings';
import { Box } from '../Box';

const Template: Story<ComponentProps<typeof Radio>> = (props: any) => (
  <Radio {...props} />
);

export const Basic = Template.bind({});
Basic.args = {
  onChange: () => {},
  name: 'radio',
  value: 'opt',
  label: 'Radio',
};

export default {
  title: 'Polyblocks/Radio',
  component: Radio,
};

export const Group = () => {
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
      <Box variant="border">
        <Box margin="10px 0" variant="raw">
          <Radio
            onChange={handleChange}
            checked={value === 'opt2'}
            name="radio1"
            value="opt2"
            label="Option 2 default icon"
          />
        </Box>
        <Box margin="10px 0" variant="raw">
          <Radio
            onChange={handleChange}
            checked={value === 'opt1'}
            name="radio1"
            value="opt1"
            label="Option 1 default icon"
          />
        </Box>
      </Box>
      <Box margin="10px 0" variant="border">
        <Box margin="10px 0" variant="raw">
          <Radio
            icon={polyIcons.CheckboxMarkedCircle}
            onChange={handleChangeIcon}
            checked={valueIcon === 'customopt1'}
            name="radio2"
            value="customopt1"
            label="Option 2 custom icon"
          />
        </Box>
        <Box margin="10px 0" variant="raw">
          <Radio
            icon={polyIcons.CheckboxMarkedCircle}
            onChange={handleChangeIcon}
            checked={valueIcon === 'customopt2'}
            name="radio2"
            value="customopt2"
            label="Option 1 custom icon"
          />
        </Box>
      </Box>
    </>
  );
};
