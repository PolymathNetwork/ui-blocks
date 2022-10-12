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
  placeholder: 'Select an option',
  options: [
    { value: 'first', label: 'First' },
    { value: 'second', label: 'Second' },
    { value: 'third', label: 'Third' },
    { value: 'forth', label: 'Forth' },
    { value: 'fifth', label: 'Fifth' },
  ],
};

export const Disabled = Template.bind({});
Disabled.args = {
  variant: 'basic',
  label: 'Select with label and icons',
  placeholder: 'Select an option',
  options: [
    { value: 'first', label: 'First' },
  ],
  isDisabled: true,
};

export const WithTooltip = Template.bind({});
WithTooltip.args = {
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
};

export const ReadOnly = Template.bind({});
ReadOnly.args = {
  variant: 'basic',
  label: 'Select with label and icons',
  tooltip: 'Some helpful information',
  placeholder: 'Select an option',
  value: { value: 'forth', label: 'Forth' },
  options: [
    { value: 'first', label: 'First' },
    { value: 'second', label: 'Second' },
    { value: 'third', label: 'Third' },
    { value: 'forth', label: 'Forth' },
    { value: 'fifth', label: 'Fifth' },
  ],
  readonly: true
};

export const WithoutIcon = Template.bind({});
WithoutIcon.args = {
  variant: 'basic',
  label: 'Choose option',
  tooltip: 'Some helpful information',
  placeholder: 'Select an option',
  options: [
    { value: 'first', label: 'First' },
    { value: 'second', label: 'Second' },
    { value: 'third', label: 'Third' },
    { value: 'forth', label: 'Forth' },
    { value: 'fifth', label: 'Fifth' },
  ],
  noIcon: true
};

export const GroupedOptions = Template.bind({});
GroupedOptions.args = {
  variant: 'basic',
  label: 'Choose option',
  tooltip: 'Some helpful information',
  placeholder: 'Select an option',
  options: [
    {
      label: "Mamals",
      options: [
        { label: "Rat", value: "value_1" },
        { label: "Bat", value: "value_2" }
      ]
    },
    {
      label: "Reptiles",
      options: [
        { label: "Snake", value: "value_1" },
        { label: "Lizard", value: "value_2" }
      ]
    },
    {
      label: "Plants",
      options: [
        { label: "Chuimui", value: "value_1" },
        { label: "Bamboo", value: "value_2" }
      ]
    }
  ],
  noIcon: true
};
