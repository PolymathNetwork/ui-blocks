import { Icon, IconProps } from './Icon';
import { polyIcons } from '../../theme';

export default {
  title: 'Polyblocks/Icon',
  component: Icon,
};

const Template = (props: any) => <Icon {...props} />;

export const Basic = Template.bind({});
Basic.args = {
  variant: 'basic',
  icon: polyIcons.Bull,
  size: '32px',
} as IconProps;

export const Circle = Template.bind({});
Circle.args = {
  variant: 'circle',
  icon: polyIcons.Bull,
  size: '32px',
} as IconProps;
