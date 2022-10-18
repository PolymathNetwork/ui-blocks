import { ComponentProps } from 'react';
import { Story } from '@storybook/react';
import { Button } from '../Button';
import { Notification } from './Notification';

export default {
  title: 'Polyblocks/Notification',
  component: Notification,
};

const Template: Story<ComponentProps<typeof Notification>> = (props: any) => (
  <Notification {...props} />
);

export const Info = Template.bind({});
Info.args = {
  title: 'notification',
  important: true,
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam odio porta purus et.',
};

export const Danger = Template.bind({});
Danger.args = {
  variant: 'danger',
  title: 'important',
  important: true,
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam odio porta purus et.',
};

export const Warning = Template.bind({});
Warning.args = {
  variant: 'warning',
  title: 'important',
  important: true,
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam odio porta purus et.',
};

export const Success = Template.bind({});
Success.args = {
  variant: 'success',
  title: 'important',
  important: true,
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam odio porta purus et.',
};

export const Closable = Template.bind({});
Closable.args = {
  variant: 'info',
  title: 'important',
  isClosable: true,
  onClose: () => alert('Close clicked'), // eslint-disable-line
  important: true,
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam odio porta purus et.',
};

export const WithButton = Template.bind({});
WithButton.args = {
  title: 'important',
  isClosable: true,
  onClose: () => alert('Close clicked'), // eslint-disable-line
  important: true,
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam odio porta purus et.',
  children: (
    <Button variant="primary" size="s">
      Button
    </Button>
  ),
};
