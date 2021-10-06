import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { Loading, LoadingProps } from '.';

export default {
  title: 'Polyblocks/Loading',
  component: Loading,
} as Meta;

const Template: Story<LoadingProps> = (args) => <Loading {...args} />;

export const Default = Template.bind({});
Default.args = {
  variant: 'dots'
} as LoadingProps;
