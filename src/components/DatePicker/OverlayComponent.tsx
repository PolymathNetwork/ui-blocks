import { FC } from 'react';

import { Flex } from '../Flex';
import { Button } from '../Button';
import { Overlay } from './styles';
import { OverlayComponentProps } from './types';

export const OverlayComponent: FC<OverlayComponentProps> = ({
  children,
  noExpiryOption,
  noExpiryCopy,
  handleNoExpiry,
  ...overlayProps
}) => (
  <Overlay {...overlayProps}>
    <Flex variant="raw" dir="column" align="center">
      {children}
      {noExpiryOption && (
        <Button variant="tertiary" margin="s 0 0 0" onClick={handleNoExpiry}>
          {noExpiryCopy}
        </Button>
      )}
    </Flex>
  </Overlay>
);
