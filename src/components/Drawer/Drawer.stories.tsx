import { ComponentProps } from 'react';
import { Story } from '@storybook/react';

import { Drawer } from './Drawer';

export default {
  title: 'Polyblocks/Drawer',
  component: Drawer,
};

const Template: Story<ComponentProps<typeof Drawer>> = (props: any) => (
  <Drawer {...props} />
);

export const Left = Template.bind({});
Left.args = {
  variant: 'basic',
  position: 'left',
  children: <p>Left drawer</p>,
  isOpen: true,
  maxWidth: 300,
};

export const Right = Template.bind({});
Right.args = {
  variant: 'basic',
  position: 'right',
  children: <p>Right drawer</p>,
  isOpen: true,
  hasOverlay: false,
};
