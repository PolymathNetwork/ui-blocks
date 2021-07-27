import { ComponentProps } from 'react';
import { Story } from '@storybook/react';

import { AttentionBox } from './AttentionBox';

export default {
  title: 'Polyblocks/AttentionBox',
  component: AttentionBox,
};

const Template: Story<ComponentProps<typeof AttentionBox>> = (props: any) => (
  <AttentionBox {...props} />
);

export const Basic = Template.bind({});
Basic.args = {
  variant: 'basic',
  title: 'important',
  important: true,
  children:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam odio porta purus et.',
};

export const Compact = Template.bind({});
Compact.args = {
  variant: 'compact',
  title: 'important',
  important: true,
  children:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam odio porta purus et.',
};
