import { ComponentProps } from 'react';
import { Story } from '@storybook/react';

import { Badge } from './Badge';
import { polyIcons } from '../../theme';

export default {
  title: 'Polyblocks/Badge',
  component: Badge,
};

const Template: Story<ComponentProps<typeof Badge>> = (props: any) => (
  <Badge {...props} />
);

export const Default = Template.bind({});
Default.args = {
  variant: 'default',
  children: 'Default Badge',
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

export const WithIcon = Template.bind({});
WithIcon.args = {
  variant: 'default',
  children: 'Icon Badge',
  icon: polyIcons.DeleteOutline,
  iconPosition: 'right'
};
