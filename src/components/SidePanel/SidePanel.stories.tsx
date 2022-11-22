import { ComponentProps } from 'react';
import { Story } from '@storybook/react';
import { polyIcons } from '../../theme'

import { SidePanel } from './SidePanel';

export default {
  title: 'Polyblocks/SidePanel',
  component: SidePanel,
};

const Template: Story<ComponentProps<typeof SidePanel>> = (props: any) => (
  <SidePanel {...props} />
);

export const Basic = Template.bind({});
Basic.args = {
  items: [
    {
      icon: polyIcons.OfficeBuilding,
      text: 'My Companies',
      isActive: true,
      onClick: () => {}
    },
    {
      icon: polyIcons.PdfBox,
      text: 'Dashboard',
      onClick: () => {}
    },
    {
      icon: polyIcons.Rocket,
      text: 'My offerings',
      onClick: () => {}
    },
    {
      icon: polyIcons.FileDocumentOutline,
      text: 'Cap table',
      onClick: () => {}
    }
  ]
};

export const Expanded = Template.bind({});
Expanded.args = {
  items: [
    {
      icon: polyIcons.OfficeBuilding,
      text: 'My Companies',
      isActive: true,
      onClick: () => {}
    },
    {
      icon: polyIcons.PdfBox,
      text: 'Dashboard',
      onClick: () => {}
    },
    {
      icon: polyIcons.Rocket,
      text: 'My offerings',
      onClick: () => {}
    },
    {
      icon: polyIcons.FileDocumentOutline,
      text: 'Cap table',
      onClick: () => {}
    }
  ],
  isExpanded: true
};
