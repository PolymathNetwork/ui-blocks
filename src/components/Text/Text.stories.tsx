import { Text, TextProps } from './Text';

export default {
  title: 'Polyblocks/Text',
  component: Text,
};

const Template = (props: any) => <Text {...props} />;

export const P = Template.bind({});
P.args = {
  variant: 'p',
  children: (
    <>
      This is in a paragraph <span>with alt text</span>.
    </>
  ),
  altColor: 'brandMain',
} as TextProps;

export const Span = Template.bind({});
Span.args = { variant: 'span', children: 'This is in a span.' } as TextProps;

export const Label = Template.bind({});
Label.args = { variant: 'label', children: 'This is in a label.' } as TextProps;
