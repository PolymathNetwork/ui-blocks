import { ComponentType, ChangeEventHandler, useState } from 'react';
import styled from 'styled-components';
import { Flex } from '../Flex';
import { Text } from '../Text';
import { Checkbox } from '../Checkbox';
import { Icon } from '../Icon';

export type SelectCardProps = {
  title?: string;
  description?: string;
  icon?: ComponentType;
  checked?: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

const Component = styled(Flex)<any>(({ theme }) => ({
  ...theme.SELECT_CARD,
}));

export const SelectCard = (props: SelectCardProps) => {
  const { title, description, checked, icon, onChange } = props;
  const [isActive, setIsActive] = useState(checked ?? false);
  return (
    <Component
      onClick={() => setIsActive(!isActive)}
      align="center"
      justify="spaced"
      {...props}
    >
      <Flex width="100%" padding="0" justify="spaced" variant="basic">
        <Flex padding="0" variant="basic" dir="column">
          <Checkbox
            variant="basic"
            checked={isActive}
            onChange={(e) => {
              setIsActive(isActive);
              onChange(e);
            }}
            label={
              <Text as="span" variant="h6" margin="0 18px">
                {title}
              </Text>
            }
          />
          <Text margin="0 0 0 36px" as="span" variant="b2">
            {description}
          </Text>
        </Flex>
        {icon && (
          <Icon
            size="48px"
            color={isActive ? 'brandMain' : 'gray1'}
            bg={isActive ? 'brandLightest' : 'gray5'}
            icon={icon}
            variant="circle"
            margin="0"
          />
        )}
      </Flex>
    </Component>
  );
};
