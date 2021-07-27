import { ComponentProps } from 'react';
import { Story } from '@storybook/react';

import { Tooltip } from './Tooltip';

export default {
  title: 'Polyblocks/Tooltip',
  component: Tooltip,
};

const Template: Story<ComponentProps<typeof Tooltip>> = (props: any) => (
  <Tooltip {...props} />
);

export const Basic = Template.bind({});
Basic.args = {
  variant: 'basic',
  content: 'Lorem ipsum dolor sit amet.',
  children: 'Basic tooltip',
};

export const Icon = Template.bind({});
Icon.args = {
  variant: 'icon',
  content: 'Lorem ipsum dolor sit amet.',
  placement: 'right',
};
