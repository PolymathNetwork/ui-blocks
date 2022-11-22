import { ComponentProps } from 'react';
import { Story } from '@storybook/react';

import { polyIcons } from '../../theme';
import { Input } from './Input';

export default {
  title: 'Polyblocks/Input',
  component: Input,
};

const Template: Story<ComponentProps<typeof Input>> = (props: any) => (
  <Input {...props} />
);

export const Basic = Template.bind({});
Basic.args = {
  variant: 'basic',
};

export const Labeled = Template.bind({});
Labeled.args = {
  variant: 'basic',
  label: 'Texbox with a label',
  tooltip: 'Some helpful imformation about this feild.',
  placeholder: 'Input some text',
};

export const Unit = Template.bind({});
Unit.args = {
  variant: 'basic',
  label: 'Texbox with a unit',
  unit: 'POLYX',
};

export const Icon = Template.bind({});
Icon.args = {
  variant: 'basic',
  label: 'Texbox with an icon',
  icon: polyIcons.PolyBull,
};

export const Amount = Template.bind({});
Amount.args = {
  variant: 'amount',
  label: 'Texbox with amount formatting',
};

export const Error = Template.bind({});
Error.args = {
  variant: 'basic',
  label: 'Texbox with error state',
  error: 'Enter valid value',
};

export const Disabled = Template.bind({});
Disabled.args = {
  variant: 'basic',
  label: 'Disabled texbox',
  placeholder: "Can't type here",
  disabled: true,
};

export const ReadOnly = Template.bind({});
ReadOnly.args = {
  variant: 'basic',
  label: 'Read only texbox',
  value: 'Read only value',
  placeholder: "Can't type here",
  readOnly: true,
};

export const CustomWidth = Template.bind({});
CustomWidth.args = {
  variant: 'basic',
  label: 'Texbox with a label',
  tooltip: 'Some helpful imformation about this feild.',
  placeholder: 'Input some text',
  width: '300px'
};
