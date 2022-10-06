import { ComponentProps } from 'react';
import { Story } from '@storybook/react';

import { TabBar } from './TabBar';

export default {
  title: 'Polyblocks/TabBar',
  component: TabBar,
};

const Template: Story<ComponentProps<typeof TabBar>> = (args) => (
  <TabBar {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  tabs: [
    { id: 'tab1', text: 'First tab' },
    { id: 'tab2', text: 'Second tab', separator: true, isActive: true },
    { id: 'tab3', text: 'Third tab' },
  ],
};
