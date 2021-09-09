import { ComponentProps } from 'react';
import { Story } from '@storybook/react';

import { Icon } from './Icon';
import { polyIcons } from '../../theme';
// import { Flex } from '../Flex';

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
  icon: polyIcons.Account,
  size: '32px',
};

export const Circle = Template.bind({});
Circle.args = {
  variant: 'circle',
  icon: polyIcons.Account,
  size: '32px',
};

// export const All = () =>
//   Object.keys(polyIcons).map((icon) => {
//     const TargetIcon = polyIcons[icon];
//     return (
//       <Flex variant="raw" key={icon} margin="0 0 l 0" align="center">
//         {icon}:
//         <Icon variant="basic" icon={TargetIcon} size="48px" margin="0 m" />
//         <Icon variant="circle" icon={TargetIcon} size="48px" />
//       </Flex>
//     );
//   });
