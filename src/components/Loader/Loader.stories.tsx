import { Meta, Story } from '@storybook/react/types-6-0';
import { Loader, LoaderProps } from '.';

export default {
  title: 'Polyblocks/Loader',
  component: Loader,
} as Meta;

const Template: Story<LoaderProps> = (args) => <Loader {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  variant: 'basic',
} as LoaderProps;

export const Screen = Template.bind({});
Screen.args = {
  variant: 'screen',
} as LoaderProps;

export const Dots = Template.bind({});
Dots.args = {
  variant: 'dots',
} as LoaderProps;

export const Outlined = Template.bind({});
Outlined.args = {
  variant: 'outlined',
} as LoaderProps;
