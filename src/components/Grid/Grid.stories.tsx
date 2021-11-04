import { ComponentProps } from 'react';
import { Story } from '@storybook/react';

import { Grid } from './Grid';
import { Box } from '../Box';

export default {
  title: 'Polyblocks/Grid',
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
      <Box variant="basic">Basic grid</Box>
      <Box variant="basic">Second box</Box>
    </>
  ),
};

export const Border = Template.bind({});
Border.args = {
  variant: 'border',
  cols: '1fr 1fr',
  children: (
    <>
      <Box variant="basic">Border grid</Box>
      <Box variant="basic">Second box</Box>
    </>
  ),
};

export const Shadow = Template.bind({});
Shadow.args = {
  variant: 'shadow',
  cols: '1fr 1fr',
  children: (
    <>
      <Box variant="basic">Shadow grid</Box>
      <Box variant="basic">Second box</Box>
    </>
  ),
};

export const Areas = Template.bind({});
Areas.args = {
  variant: 'basic',
  gap: 'm',
  areas: `
  "first  second third"
  "fourth .      fifth"
  `,
  children: (
    <>
      <Grid.Item as="Box" variant="shadow" area="first">
        First
      </Grid.Item>
      <Grid.Item as="Box" variant="shadow" area="second">
        Second
      </Grid.Item>
      <Grid.Item as="Box" variant="shadow" area="third">
        Third
      </Grid.Item>
      <Grid.Item as="Box" variant="shadow" area="fourth">
        Fourth
      </Grid.Item>
      <Grid.Item as="Box" variant="shadow" area="fifth">
        Fifth
      </Grid.Item>
    </>
  ),
};
