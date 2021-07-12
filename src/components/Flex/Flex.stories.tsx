import { Flex, FlexProps } from './Flex';

export default {
  title: 'Polyblocks/Flex',
  component: Flex,
};

const Template = (props: any) => <Flex {...props} />;

export const Basic = Template.bind({});
Basic.args = {
  variant: 'basic',
  justify: 'center',
  children: 'Basic flex',
} as FlexProps;

export const Border = Template.bind({});
Border.args = {
  variant: 'border',
  justify: 'center',
  children: 'Border flex',
} as FlexProps;

export const Shadow = Template.bind({});
Shadow.args = {
  variant: 'shadow',
  justify: 'center',
  children: 'Shadow flex',
} as FlexProps;
