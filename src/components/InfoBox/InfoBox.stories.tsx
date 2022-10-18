import { ComponentProps } from 'react';
import { Story } from '@storybook/react';
import { Button } from '../Button';
import { InfoBox } from './InfoBox';

export default {
  title: 'Polyblocks/InfoBox',
  component: InfoBox,
};

const Template: Story<ComponentProps<typeof InfoBox>> = (props: any) => (
  <InfoBox {...props} />
);

export const Default = Template.bind({});
Default.args = {
  size: 'default',
  title: 'important',
  important: true,
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam odio porta purus et.',
};

export const Danger = Template.bind({});
Danger.args = {
  size: 'default',
  variant: 'danger',
  title: 'important',
  important: true,
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam odio porta purus et.',
};

export const Warning = Template.bind({});
Warning.args = {
  size: 'default',
  variant: 'warning',
  title: 'important',
  important: true,
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam odio porta purus et.',
};

export const Special = Template.bind({});
Special.args = {
  size: 'default',
  variant: 'special',
  title: 'important',
  important: true,
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam odio porta purus et.',
};

export const Closable = Template.bind({});
Closable.args = {
  size: 'default',
  variant: 'default',
  title: 'important',
  isClosable: true,
  onClose: () => alert('Close clicked'), // eslint-disable-line
  important: true,
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam odio porta purus et.',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  title: 'important',
  important: true,
  margin: '0',
  isClosable: true,
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam odio porta purus et.',
};

export const WithButton = Template.bind({});
WithButton.args = {
  size: 'default',
  title: 'important',
  isClosable: true,
  onClose: () => alert('Close clicked'), // eslint-disable-line
  important: true,
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam odio porta purus et.',
  children: <Button variant="primary">Button</Button>,
};

export const Compact = Template.bind({});
Compact.args = {
  size: 'compact',
  title: 'important',
  important: true,
  margin: '0',
  isClosable: true,
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam odio porta purus et.',
};

export const CompactWithButton = Template.bind({});
CompactWithButton.args = {
  size: 'compact',
  title: 'important',
  important: true,
  margin: '0',
  isClosable: true,
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam odio porta purus et.',
  children: <Button variant="primary">Button</Button>,
};
