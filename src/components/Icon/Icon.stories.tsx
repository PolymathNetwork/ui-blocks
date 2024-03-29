import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react';

import { PolyIcons } from 'theme/icons';
import { Icon } from './Icon';
import { polyIcons } from '../../theme';
import { Flex } from '../Flex';
import { Grid } from '../Grid';

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

export const All = () => (
  <Grid variant="raw" cols="repeat(3, min-content)" rowGap="xs">
    {Object.keys(polyIcons).map((icon) => {
      const TargetIcon = polyIcons[icon as keyof PolyIcons];

      return (
        <React.Fragment key={icon}>
          <Flex variant="raw" align="center" justify="end">
            {icon}:
          </Flex>
          <Icon variant="basic" icon={TargetIcon} size="32px" margin="0 m" />
          <Icon variant="circle" icon={TargetIcon} size="32px" />
        </React.Fragment>
      );
    })}
  </Grid>
);
