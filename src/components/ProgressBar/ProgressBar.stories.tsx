import { Meta, Story } from '@storybook/react/types-6-0';
import { ProgressBar, ProgressBarProps } from '.';

export default {
  title: 'Polyblocks/ProgressBar',
  component: ProgressBar,
} as Meta;

const Template: Story<ProgressBarProps> = (args) => <ProgressBar {...args} />;

export const Default = Template.bind({});
Default.args = { percent: 75 } as ProgressBarProps;
