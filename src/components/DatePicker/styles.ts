import styled from 'styled-components';

import { Box } from '../Box';

export const Overlay = styled(Box)(({ theme }) => ({
  ...(theme.DATEPICKER || {}),
  position: 'absolute',
  zIndex: 1,
}));
