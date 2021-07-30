import { FC } from 'react';
import styled from 'styled-components';

import { Box, BoxProps } from '../Box';

export type DrawerVariant = 'left' | 'right';

export type DrawerProps = Omit<BoxProps, 'variant'> & {
  variant: DrawerVariant;
  isOpen: boolean;
  hasOverlay?: boolean;
};

const Overlay = styled(Box)({
  margin: 0,
  padding: 0,
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  overflow: 'hidden',
  backgroundColor: 'rgba(21, 41, 53, 0.3)',
});

const Component = styled(Box)<any>(({ theme, variant, radius, isOpen }) => {
  const isLeft = variant === 'left';
  return {
    top: 0,
    bottom: 0,
    overflowX: 'hidden',
    overflowY: 'auto',
    backgroundColor: theme.COLOR.light,
    ...(theme.DRAWER[variant] || {}),
    position: 'fixed',
    ...(isLeft ? { left: 0 } : { right: 0 }),
    transform: `translate3d(${
      isOpen ? '0' : `${isLeft ? '-' : ''}110%`
    }, 0, 0)`,
    ...(radius
      ? isLeft
        ? {
            borderRadius: 0,
            borderTopRightRadius: theme.RADIUS[radius],
            borderBottomRightRadius: theme.RADIUS[radius],
          }
        : {
            borderRadius: 0,
            borderTopLeftRadius: theme.RADIUS[radius],
            borderBottomLeftRadius: theme.RADIUS[radius],
          }
      : {}),
  };
});

export const Drawer: FC<DrawerProps> = ({
  hasOverlay = true,
  isOpen,
  ...props
}) => (
  <>
    {isOpen && hasOverlay && <Overlay variant="raw" />}
    <Component isOpen={isOpen} {...props} />
  </>
);
