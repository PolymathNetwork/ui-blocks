import { ComponentProps } from 'react';
import { Story } from '@storybook/react';
import { polyIcons } from '../../theme';
import { SelectCard } from './SelectCard';

export default {
  title: 'Polyblocks/SelectCard',
  component: SelectCard,
};

const Template: Story<ComponentProps<typeof SelectCard>> = (props: any) => (
  <SelectCard {...props} />
);

export const Basic = Template.bind({});
Basic.args = {
  title: 'Card title',
  description: 'Some description text here.',
  onChange: () => {},
};

export const Checked = Template.bind({});
Checked.args = {
  title: 'Card title',
  description: 'Some description text here.',
  checked: true,
  onChange: () => {},
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  title: 'Card title',
  description: 'Some description text here.',
  icon: polyIcons.Image,
  onChange: () => {},
};
