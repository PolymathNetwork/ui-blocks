import { FC, useState } from 'react';

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
  hasIconBg?: boolean;
  onClick?: (state: boolean) => void;
};

export const Collapsable: FC<CollapsableProps> = ({
  title,
  defaultOpen,
  clickable = true,
  hasIconBg = true,
  onClick,
  children,
  ...restProps
}) => {
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
          color={isOpen ? 'brandMain' : 'gray.3'}
          {...(hasIconBg
            ? { bg: isOpen ? 'brandLightest' : 'gray.4' }
            : { bg: 'transparent' })}
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
};
