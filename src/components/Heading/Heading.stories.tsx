import { ComponentProps } from 'react';
import { Story } from '@storybook/react';

import { Heading } from './Heading';

export default {
  title: 'Polyblocks/Heading',
  component: Heading,
};

const Template: Story<ComponentProps<typeof Heading>> = (props: any) => (
  <Heading {...props} />
);

export const H1 = Template.bind({});
H1.args = {
  variant: 'h1',
  children: (
    <>
      Heading 1 <span>with alt text</span>
    </>
  ),
  altColor: 'brandMain',
};

export const H2 = Template.bind({});
H2.args = { variant: 'h2', children: 'Heading 2' };

export const H3 = Template.bind({});
H3.args = { variant: 'h3', children: 'Heading 3' };

export const H4 = Template.bind({});
H4.args = { variant: 'h4', children: 'Heading 4' };

export const H5 = Template.bind({});
H5.args = { variant: 'h5', children: 'Heading 5' };

export const H6 = Template.bind({});
H6.args = { variant: 'h6', children: 'Heading 6' };
