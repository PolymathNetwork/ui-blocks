import { ComponentProps } from 'react';
import { Story } from '@storybook/react';

import { Text } from './Text';

export default {
  title: 'Polyblocks/Text',
  component: Text,
};

const Template: Story<ComponentProps<typeof Text>> = (props: any) => (
  <Text {...props} />
);

export const P = Template.bind({});
P.args = {
  variant: 'b2m',
  as: 'p',
  children: (
    <>
      This is in a paragraph <span>with alt text</span>.
    </>
  ),
  altColor: 'brandMain',
};

export const Span = Template.bind({});
Span.args = {
  variant: 'b2',
  as: 'span',
  children: 'This is in a span.',
};

export const Label = Template.bind({});
Label.args = {
  variant: 'b3',
  as: 'label',
  children: 'This is in a label.',
};
