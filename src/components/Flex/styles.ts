import styled from 'styled-components';

import { propValueMap } from '../../theme/types';
import { Box } from '../Box';
import { FlexProps } from './types';

export const Component = styled(Box)<FlexProps>(
  ({ justify, align, dir, theme }) => ({
    ...(theme.FLEX || {}),
    display: 'flex',
    ...(justify && { justifyContent: propValueMap[justify] || justify }),
    ...(align && { alignItems: propValueMap[align] || align }),
    ...(dir && { flexDirection: dir }),
  })
);
