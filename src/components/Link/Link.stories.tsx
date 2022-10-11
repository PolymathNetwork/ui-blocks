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

export const Basic = Template.bind({});
Basic.args = {
  href: 'https://polymath.network',
  label: 'Link',
  size: 'm',
  variant: 'primary',
  target: '_blank',
};
export const Secondary = Template.bind({});
Secondary.args = {
  href: 'https://polymath.network',
  label: 'Link',
  size: 'l',
  variant: 'secondary',
  target: '_blank',
};
