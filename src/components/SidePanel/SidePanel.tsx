import { ComponentType, PropsWithChildren } from 'react';
import styled from 'styled-components';
import { Flex } from '../Flex';
import { Icon } from '../Icon';
import { Text } from '../Text';

export type SidePanelVariant = 'default';

export type SidePanelItem = {
  text: string;
  icon: ComponentType;
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
  isActive?: boolean;
}

export type SidePanelProps = PropsWithChildren<{
  items: SidePanelItem[],
  isExpanded?: boolean;
}>;

const Component = styled(Flex)<any>(({ theme, isExpanded }) => ({
  ...(theme.SIDE_PANEL.parent || {}),
  ...(isExpanded && { width: '240px' })
}));

const StyledFlex = styled(Flex)<any>(({ theme, isActive, isExpanded }) => ({
  ...(theme.SIDE_PANEL.item || {}),
  ...(isActive && {
    background: theme.COLOR.brandLightest,
    svg: {
      minWidth: '18px',
      path: {
        fill: theme.COLOR.brandMain
      }
    }
  }),
  '.item-text': {
    ...theme.SIDE_PANEL.item['.item-text'],
    ...(isActive && { p: { color: theme.COLOR.brandMain } }),
    ...(isExpanded && { width: 'fit-content' })
  }
}));


const Item = ({ item, isExpanded }: {item: SidePanelItem, isExpanded?: boolean }) => {
  return (
    <StyledFlex isExpanded={isExpanded} onClick={(e: React.MouseEvent<HTMLElement>) => item.onClick(e)} isActive={item.isActive} variant="raw" >
      <Icon size="18px" variant="basic" icon={item.icon} />
      <div className="item-text" >
        <Text as="p" margin='0 0 0 19px' variant="b1m">{item.text}</Text>
      </div>
    </StyledFlex>
  );
}


export function SidePanel(sidePanelProps: SidePanelProps) {
  const { items, isExpanded } = sidePanelProps;

  return (
    <Component isExpanded={isExpanded} dir="column" >
      {
        items.map(item => <Item isExpanded={isExpanded} item={item} />)
      }
    </Component>
  );
}
