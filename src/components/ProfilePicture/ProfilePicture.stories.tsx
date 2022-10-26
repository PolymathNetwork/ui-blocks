import { ComponentProps } from 'react';
import { Story } from '@storybook/react';

import { ProfilePicture } from './ProfilePicture';

export default {
  title: 'Polyblocks/ProfilePicture',
  component: ProfilePicture,
};

const Template: Story<ComponentProps<typeof ProfilePicture>> = (props: any) => (
  <ProfilePicture {...props} />
);

export const WithIcon = Template.bind({});
WithIcon.args = {
  variant: 'icon',
};

export const WithImage = Template.bind({});
WithImage.args = {
  variant: 'image',
  image: 'https://www.w3schools.com/howto/img_avatar2.png',
};
