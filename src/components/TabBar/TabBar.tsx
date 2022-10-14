import { FC, ComponentType, useState } from 'react';
import styled from 'styled-components';

import { Flex, FlexProps } from '../Flex';
import { Text } from '../Text';
import { Icon } from '../Icon';
import { polyIcons } from '../../theme/icons';

export type TabBarVariant = 'basic';

export type TabItemProps = {
  id: string;
  text: string;
  icon?: ComponentType;
  url?: string;
  onClick?: () => void;
  isActive?: boolean;
  separator?: boolean;
  key?: string;
};

export type TabBarProps = FlexProps & {
  tabs: TabItemProps[];
};

const ActiveTab = styled<any>(Flex)(({ theme, separator }) => ({
  ...(separator
    ? {
        color: theme.COLOR.brandMain,
        padding: `0 ${theme.GAP.xs} 0 0`,
        borderBottom: `4px solid ${theme.COLOR.brandMain}`,
      }
    : {}),
}));

const ActiveTextLink = styled.a(({ theme }) => ({
  color: theme.COLOR.brandMain,
  textDecoration: 'none',
  cursor: 'pointer',
}));

const ActiveText = styled<any>(Text)(({ theme }) => ({
  whiteSpace: 'nowrap',
  padding: theme.GAP.xs,
  '&:hover': {
    color: theme.COLOR.brandMain,
    cursor: 'pointer',
    fill: theme.COLOR.brandMain,
  },
}));
const IconT = styled<any>(Icon)(({ isHover }) => ({
  cursor: 'pointer',
  fill: isHover ? '#1A56AF' : '#1E1E1E',
}));

const Item: FC<TabItemProps> = ({
  text,
  url,
  isActive,
  separator,
  onClick,
}) => {
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  return (
    <ActiveTab
      variant="raw"
      justify="center"
      align="center"
      margin="0 xs 0 0"
      separator={separator}
      color="brandMain"
    >
      <ActiveTextLink {...(url ? { href: url } : { onClick })}>
        <ActiveText
          variant="span"
          format="b2"
          color="gray1"
          display="flex"
          isActive={isActive}
          isHover={isHover}
        >
          <IconT
            icon={polyIcons.ArrowTab}
            variant="circle"
            size="24px"
            cursor="pointer"
            color={isHover || isActive ? 'brandMain' : 'gray.2'}
            bg="light"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
          <Text
            as="span"
            variant="b1"
            color={isActive ? 'brandMain' : 'gray.2'}
          >
            {text}
          </Text>
        </ActiveText>
      </ActiveTextLink>
    </ActiveTab>
  );
};

const TabBarComponent: FC<TabBarProps> = ({
  tabs,
  variant = 'raw',
  justify = 'start',
  align = 'end',
  dir = 'row',
  ...props
}) => {
  return (
    <Flex
      variant={variant}
      justify={justify}
      align={align}
      dir={dir}
      {...props}
    >
      {tabs.map((t) => (
        <Item key={t.id} {...t} />
      ))}
    </Flex>
  );
};

export const TabBar = Object.assign(TabBarComponent, {
  Item,
});
