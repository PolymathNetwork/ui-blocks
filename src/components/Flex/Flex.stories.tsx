import { ComponentProps } from 'react';
import { Story } from '@storybook/react';

import { Flex } from './Flex';

export default {
  title: 'UI-Blocks/Flex',
  component: Flex,
};

const Template: Story<ComponentProps<typeof Flex>> = (props: any) => (
  <Flex {...props} />
);

export const Basic = Template.bind({});
Basic.args = {
  variant: 'basic',
  justify: 'center',
  children: 'Basic flex',
};

export const Border = Template.bind({});
Border.args = {
  variant: 'border',
  justify: 'center',
  children: 'Border flex',
};

export const Shadow = Template.bind({});
Shadow.args = {
  variant: 'shadow',
  justify: 'center',
  children: 'Shadow flex',
};
