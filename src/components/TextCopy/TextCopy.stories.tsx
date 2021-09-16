import { ComponentProps } from 'react';
import { Story } from '@storybook/react';

import { TextCopy } from './TextCopy';

export default {
  title: 'Polyblocks/TextCopy',
  component: TextCopy,
};

const Template: Story<ComponentProps<typeof TextCopy>> = (props: any) => (
  <TextCopy {...props} />
);

export const Basic = Template.bind({});
Basic.args = {
  variant: 'b3',
  value: '0x34786538947657436583765836586378563786',
  children: '0x34786538947657436583765836586378563786',
  link: 'https://polymath.network',
  trim: true,
};
