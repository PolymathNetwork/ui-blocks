import { ComponentProps } from 'react';
import { Story } from '@storybook/react';

import { Checkbox } from './Checkbox';

export default {
  title: 'Polyblocks/Checkbox',
  component: Checkbox,
};

const Template: Story<ComponentProps<typeof Checkbox>> = (props: any) => (
  <Checkbox {...props} />
);

export const Basic = Template.bind({});
Basic.args = {
  name: 'chkbox1',
  label: 'Checkbox label',
  variant: 'basic',
};
