import { ComponentProps } from 'react';
import { Story } from '@storybook/react';

import { Link } from './Link';

export default {
  title: 'Polyblocks/Link',
  component: Link,
};

const Template: Story<ComponentProps<typeof Link>> = (props: any) => (
  <Link {...props} />
);

export const Anchor = Template.bind({});
Anchor.args = {
  variant: 'anchor',
  href: 'https://polymath.network',
  children: <>This is in a link</>,
};

export const Button = Template.bind({});
Button.args = {
  variant: 'button',
  children: <>This is in a link Button</>,
};
