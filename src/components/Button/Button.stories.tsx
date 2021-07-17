import { ComponentProps } from 'react';
import { Story } from '@storybook/react';

import { Button } from './Button';

export default {
  title: 'Polyblocks/Button',
  component: Button,
};

const Template: Story<ComponentProps<typeof Button>> = (props: any) => (
  <Button {...props} />
);

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  children: 'Primary Button',
  onClick: () => {
    alert('Button clicked!'); // eslint-disable-line
  },
};

export const PrimaryDisabled = Template.bind({});
PrimaryDisabled.args = {
  variant: 'primary',
  children: 'Disabled Primary Button',
  disabled: true,
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  children: 'Secondary Button',
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  variant: 'tertiary',
  children: 'Tertiary Button',
};

export const Inline = Template.bind({});
Inline.args = {
  variant: 'inline',
  children: 'Inline Button',
};
