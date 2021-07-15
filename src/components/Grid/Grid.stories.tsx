import { ComponentProps } from 'react';
import { Story } from '@storybook/react';

import { Grid } from './Grid';
import { Box } from '../Box';

export default {
  title: 'UI-Blocks/Grid',
  component: Grid,
};

const Template: Story<ComponentProps<typeof Grid>> = (props: any) => (
  <Grid {...props} />
);

export const Basic = Template.bind({});
Basic.args = {
  variant: 'basic',
  cols: '1fr 1fr',
  children: (
    <>
      <Box variant='basic'>Basic grid</Box>
      <Box variant='basic'>Second box</Box>
    </>
  ),
};

export const Border = Template.bind({});
Border.args = {
  variant: 'border',
  cols: '1fr 1fr',
  children: (
    <>
      <Box variant='basic'>Border grid</Box>
      <Box variant='basic'>Second box</Box>
    </>
  ),
};

export const Shadow = Template.bind({});
Shadow.args = {
  variant: 'shadow',
  cols: '1fr 1fr',
  children: (
    <>
      <Box variant='basic'>Shadow grid</Box>
      <Box variant='basic'>Second box</Box>
    </>
  ),
};
