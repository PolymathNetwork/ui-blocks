import styled from 'styled-components';

import { getMargin } from '../../theme/utils';
import { PageProps } from './types';

export const Component = styled.div<PageProps>(({ theme, margin }) => ({
  ...(theme.PAGE || {}),
  margin: getMargin({ theme, margin }),
}));
