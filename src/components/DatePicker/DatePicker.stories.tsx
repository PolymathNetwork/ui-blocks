import { ComponentProps } from 'react';
import { Story } from '@storybook/react';

import { DatePicker } from './DatePicker';
import { LablePosition } from '../Input';

export default {
  title: 'Polyblocks/DatePicker',
  component: DatePicker,
};

const Template: Story<ComponentProps<typeof DatePicker>> = (props: any) => (
  <DatePicker {...props} />
);

export const Basic = Template.bind({});
Basic.args = {
  variant: 'basic',
  hasIcon: true,
  label: 'Date picker with a label',
};

export const NoExpiry = Template.bind({});
NoExpiry.args = {
  variant: 'basic',
  hasIcon: true,
  label: 'Date picker with a label',
  noExpiryOption: true,
  noExpiryCopy: 'Does not expire',
};

export const WithLeftLabel = Template.bind({});
WithLeftLabel.args = {
  variant: 'basic',
  hasIcon: true,
  label: 'Date picker with left label',
  labelPosition: LablePosition.Left,
};

export const Disabled = Template.bind({});
Disabled.args = {
  variant: 'basic',
  hasIcon: true,
  label: 'Disabled date picker',
  disabled: true
};
