import { ComponentProps } from 'react';
import { Story } from '@storybook/react';

import { InfoBox } from './InfoBox';

export default {
  title: 'Polyblocks/InfoBox',
  component: InfoBox,
};

const Template: Story<ComponentProps<typeof InfoBox>> = (props: any) => (
  <InfoBox {...props} />
);

export const Basic = Template.bind({});
Basic.args = {
  variant: 'basic',
  title: 'important',
  important: true,
  children:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam odio porta purus et.',
};

export const Compact = Template.bind({});
Compact.args = {
  variant: 'compact',
  title: 'important',
  important: true,
  children:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam odio porta purus et.',
};
