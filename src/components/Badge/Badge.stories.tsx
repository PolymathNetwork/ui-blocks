import { ComponentProps } from 'react';
import { Story } from '@storybook/react';

import { Badge } from './Badge';

export default {
  title: 'Polyblocks/Badge',
  component: Badge,
};

const Template: Story<ComponentProps<typeof Badge>> = (props: any) => (
  <Badge {...props} />
);

export const Basic = Template.bind({});
Basic.args = {
  variant: 'basic',
  children: 'Basic Badge',
};

export const Success = Template.bind({});
Success.args = {
  variant: 'success',
  children: 'Success Badge',
};

export const Warning = Template.bind({});
Warning.args = {
  variant: 'warning',
  children: 'Warning Badge',
};

export const Danger = Template.bind({});
Danger.args = {
  variant: 'danger',
  children: 'Danger Badge',
};
