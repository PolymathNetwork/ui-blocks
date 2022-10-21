import { ComponentProps } from 'react';
import { Story } from '@storybook/react';

import { polyIcons } from '../../theme';
import { DropZone } from './DropZone';

export default {
  title: 'Polyblocks/DropBox',
  component: DropZone,
};

const Template: Story<ComponentProps<typeof DropZone>> = (props: any) => (
  <DropZone {...props} />
);

export const Basic = Template.bind({});
Basic.args = {
  onFileUpload: (file) => {
    console.log(file); // eslint-disable-line
  },
};

export const WithCustomIcon = Template.bind({});
WithCustomIcon.args = {
  icon: polyIcons.Image,
  onFileUpload: (file) => {
    console.log(file); // eslint-disable-line
  },
};
