import { Button, ButtonProps } from './Button';

export default {
  title: 'Polyblocks/Button',
  component: Button,
};

const Template = (props: any) => <Button {...props} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  children: 'Primary Button',
  onClick: () => {
    alert('Button clicked!');
  },
} as ButtonProps;

export const PrimaryDisabled = Template.bind({});
PrimaryDisabled.args = {
  variant: 'primary',
  children: 'Disabled Primary Button',
  disabled: true,
} as ButtonProps;

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  children: 'Secondary Button',
} as ButtonProps;

export const Tertiary = Template.bind({});
Tertiary.args = {
  variant: 'tertiary',
  children: 'Tertiary Button',
} as ButtonProps;

export const Inline = Template.bind({});
Inline.args = {
  variant: 'inline',
  children: 'Inline Button',
} as ButtonProps;
