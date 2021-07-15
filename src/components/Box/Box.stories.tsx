import { ComponentProps } from 'react';
import { Story } from '@storybook/react';

import { Box } from './Box';

export default {
  title: 'UI-Blocks/Box',
  component: Box,
};

const Template: Story<ComponentProps<typeof Box>> = (props: any) => (
  <Box {...props} />
);

export const Basic = Template.bind({});
Basic.args = {
  variant: 'basic',
  children: 'Basic box',
};

export const Border = Template.bind({});
Border.args = {
  variant: 'border',
  children: 'Border box',
};

export const Shadow = Template.bind({});
Shadow.args = {
  variant: 'shadow',
  children: 'Shadow box',
};
