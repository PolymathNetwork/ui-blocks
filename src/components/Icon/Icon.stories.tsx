import { ComponentProps } from 'react';
import { Story } from '@storybook/react';

import { Icon } from './Icon';
import { polyIcons } from '../../theme';

export default {
  title: 'Polyblocks/Icon',
  component: Icon,
};

const Template: Story<ComponentProps<typeof Icon>> = (props: any) => (
  <Icon {...props} />
);

export const Basic = Template.bind({});
Basic.args = {
  variant: 'basic',
  icon: polyIcons.PolyBull,
  size: '32px',
};

export const Circle = Template.bind({});
Circle.args = {
  variant: 'circle',
  icon: polyIcons.PolyBull,
  size: '32px',
};
