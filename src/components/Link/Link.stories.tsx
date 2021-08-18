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
  size: 'medium',
  variant: "primary",
  target: '_blank'
};
