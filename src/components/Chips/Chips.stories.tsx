import { ComponentProps } from 'react';
import { Story } from '@storybook/react';

import { Chips } from './Chips';

export default {
  title: 'Polyblocks/Chips',
  component: Chips,
};

const Template: Story<ComponentProps<typeof Chips>> = (props: any) => (
  <Chips {...props} />
);

export const Basic = Template.bind({});
Basic.args = {
  text: 'Active',
  number: 12,
  variant: 'default'
};
