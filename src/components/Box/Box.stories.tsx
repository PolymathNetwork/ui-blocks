import { Box, BoxProps } from './Box';

export default {
  title: 'Polyblocks/Box',
  component: Box,
};

const Template = (props: any) => <Box {...props} />;

export const Basic = Template.bind({});
Basic.args = {
  variant: 'basic',
  children: 'Basic box',
} as BoxProps;

export const Border = Template.bind({});
Border.args = {
  variant: 'border',
  children: 'Border box',
} as BoxProps;

export const Shadow = Template.bind({});
Shadow.args = {
  variant: 'shadow',
  children: 'Shadow box',
} as BoxProps;
