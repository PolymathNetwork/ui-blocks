import styled from 'styled-components';

import { propValueMap } from '../../theme/types';
import { Box } from '../Box';
import { GridItemProps, GridProps } from './types';

export const Component = styled(Box)<GridProps>(
  ({ theme, justify, align, cols, rows, gap }) => ({
    ...(theme.GRID || {}),
    display: 'grid',
    ...(justify ? { justifyContent: propValueMap[justify] || justify } : {}),
    ...(align ? { alignItems: propValueMap[align] || align } : {}),
    ...(cols ? { gridTemplateColumns: cols } : {}),
    ...(rows ? { gridTemplateRows: rows } : {}),
    ...(gap ? { gridGap: theme.GAP[gap] } : {}),
  }),
);

export const ItemWrapper = styled.div<GridItemProps & any>`
  grid-area: ${({ area }) => area};
`;
