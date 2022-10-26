import { useState } from 'react';
import { COLLAPSABLE } from '../../theme/definitions/blue';
import { polyIcons } from '../../theme';
import { Box, BoxVariant, BoxProps } from '../Box';
import { Flex } from '../Flex';
import { Heading } from '../Heading';
import { Icon } from '../Icon';

export type CollapsableVariant = BoxVariant;

export type CollapsableProps = BoxProps & {
  title: string;
  defaultOpen?: boolean;
  clickable?: boolean;
  onClick?: (state: boolean) => void;
  iconVariant?: 'default' | 'transparent';
};

export function Collapsable(collapsableProps: CollapsableProps) {
  const {
    title,
    defaultOpen,
    clickable = true,
    onClick,
    children,
    iconVariant = 'default',
    ...restProps
  } = collapsableProps;
  const [isOpen, setIsOpen] = useState(defaultOpen || false);

  const toggle = () => {
    const newState = !isOpen;
    setIsOpen(newState);
    if (onClick) onClick(newState);
  };

  const clickableProps = {
    onClick: toggle,
    style: { cursor: 'pointer' },
  };

  return (
    <Box {...restProps}>
      <Flex
        variant="raw"
        justify="spaced"
        {...(clickable ? clickableProps : {})}
      >
        <Heading variant="h5" margin="0 l 0 0">
          {title}
        </Heading>
        <Icon
          variant="circle"
          icon={polyIcons.ChevronUp}
          size="32px"
          scale={1}
          color={
            isOpen
              ? COLLAPSABLE.iconVariants[iconVariant].iconColor.open
              : COLLAPSABLE.iconVariants[iconVariant].iconColor.closed
          }
          bg={
            isOpen
              ? COLLAPSABLE.iconVariants[iconVariant].bgColor.open
              : COLLAPSABLE.iconVariants[iconVariant].bgColor.open
          }
          rotate={isOpen ? undefined : '180deg'}
          {...(clickable ? {} : clickableProps)}
        />
      </Flex>
      {isOpen && (
        <Box variant="raw" margin="l 0 0 0">
          {children}
        </Box>
      )}
    </Box>
  );
}
