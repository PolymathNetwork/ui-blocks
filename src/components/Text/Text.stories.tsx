import { ComponentProps } from 'react';
import { Story } from '@storybook/react';

import { Text } from './Text';

export default {
  title: 'UI-Blocks/Text',
  component: Text,
};

const Template: Story<ComponentProps<typeof Text>> = (props: any) => (
  <Text {...props} />
);

export const P = Template.bind({});
P.args = {
  variant: 'p',
  children: (
    <>
      This is in a paragraph <span>with alt text</span>.
    </>
  ),
  altColor: 'brandMain',
};

export const Span = Template.bind({});
Span.args = {
  variant: 'span',
  children: 'This is in a span.',
};

export const Label = Template.bind({});
Label.args = {
  variant: 'label',
  children: 'This is in a label.',
};
