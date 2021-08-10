import { ComponentProps } from 'react';
import { Story } from '@storybook/react';

import { Collapsable } from './Collapsable';

export default {
  title: 'Polyblocks/Collapsable',
  component: Collapsable,
};

const Template: Story<ComponentProps<typeof Collapsable>> = (props: any) => (
  <Collapsable {...props} />
);

export const Basic = Template.bind({});
Basic.args = {
  variant: 'basic',
  title: 'Basic collapsable',
  children: 'Some content to tuck away.',
};
