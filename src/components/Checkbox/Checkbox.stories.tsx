import { ComponentProps } from 'react';
import { Story } from '@storybook/react';

import { Text } from '../Text';
import { Checkbox } from './Checkbox';

export default {
  title: 'Polyblocks/Checkbox',
  component: Checkbox,
};

const Template: Story<ComponentProps<typeof Checkbox>> = (props: any) => (
  <>
    <Checkbox {...props} />
    <Checkbox
      {...props}
      label={
        <Text as="span" variant="b1m" margin="0 0 0 xs">
          Custom label component
        </Text>
      }
      margin="s 0 0"
    />
  </>
);

export const Basic = Template.bind({});
export const Disabled = Template.bind({});

Basic.args = {
  name: 'chkbox1',
  label: 'Checkbox label',
  variant: 'basic',
};
Disabled.args = {
  name: 'chkbox2',
  label: 'Checkbox label',
  variant: 'basic',
};
