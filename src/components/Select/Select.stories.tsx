import { ComponentProps } from 'react';
import { Story } from '@storybook/react';

import { Select } from './Select';

export default {
  title: 'Polyblocks/Select',
  component: Select,
};

const Template: Story<ComponentProps<typeof Select>> = (props: any) => (
  <Select {...props} />
);

export const Basic = Template.bind({});
Basic.args = {
  variant: 'basic',
  label: 'Select with label and icons',
  tooltip: 'Some helpful information',
  placeholder: 'Select an option',
  options: [
    { value: 'first', label: 'First' },
    { value: 'second', label: 'Second' },
    { value: 'third', label: 'Third' },
    { value: 'forth', label: 'Forth' },
    { value: 'fifth', label: 'Fifth' },
  ],
  disabled: true,
};
