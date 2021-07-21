import { ComponentProps } from 'react';
import { Story } from '@storybook/react';

import { DatePicker } from './DatePicker';

export default {
  title: 'Polyblocks/DatePicker',
  component: DatePicker,
};

const Template: Story<ComponentProps<typeof DatePicker>> = (props: any) => (
  <DatePicker {...props} />
);

export const Basic = Template.bind({});
Basic.args = {
  variant: 'basic',
  label: 'Date picker with a label',
};
