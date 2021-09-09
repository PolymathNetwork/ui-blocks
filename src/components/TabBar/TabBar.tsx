import { FC, ComponentType } from 'react';
import styled from 'styled-components';

import { Flex, FlexProps } from '../Flex';
import { Text } from '../Text';
import { Icon } from '../Icon';

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
        padding: `0 ${theme.GAP.xs} 0 0`,
        borderRight: `2px solid ${theme.COLOR.gray4}`,
      }
    : {}),
}));

const ActiveTextLink = styled.a(({ theme }) => ({
  textDecoration: 'none',
  color: theme.COLOR.gray1,
  cursor: 'pointer',
}));

const ActiveText = styled<any>(Text)(({ theme, isActive }) => ({
  whiteSpace: 'nowrap',
  borderRadius: '100px',
  padding: theme.GAP.xs,
  backgroundColor: isActive ? theme.COLOR.gray5 : 'transparent',
  '&:hover': {
    backgroundColor: theme.COLOR.gray5,
  },
}));

const Item: FC<TabItemProps> = ({
  text,
  url,
  icon,
  isActive,
  separator,
  onClick,
}) => {
  return (
    <ActiveTab
      variant="raw"
      justify="center"
      align="center"
      margin="0 xs 0 0"
      separator={separator}
    >
      <ActiveTextLink {...(url ? { href: url } : { onClick })}>
        <ActiveText
          variant="span"
          format="b2"
          color="gray1"
          isActive={isActive}
        >
          {icon && (
            <Icon
              variant="basic"
              icon={icon}
              size="24px"
              margin="0 s 0 0"
              color={isActive ? 'gray.1' : 'gray.2'}
            />
          )}
          <Text
            variant="span"
            format="b2m"
            color={isActive ? 'gray.1' : 'gray.2'}
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
