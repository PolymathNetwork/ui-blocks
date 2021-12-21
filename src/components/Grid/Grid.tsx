import { FC } from 'react';
import styled from 'styled-components';

import { propValueMap, Justify, Align, Gap } from '../../theme/types';
import { Box, BoxProps, BoxVariant } from '../Box';
import { Flex, FlexProps, FlexVariant } from '../Flex';

export type GridVariant = BoxVariant;

export type GridProps = BoxProps & {
  justify?: Justify;
  align?: Align;
  areas?: string;
  cols?: string;
  rows?: string;
  gap?: Gap;
  colGap?: Gap;
  rowGap?: Gap;
};

export type GridItemProps = BoxProps &
  FlexProps &
  GridProps & {
    as: 'Box' | 'Flex' | 'Grid';
    variant: BoxVariant | FlexVariant | GridVariant;
    area?: string;
  };

const Component = styled(Box)<GridProps>(
  ({ theme, justify, align, areas, cols, rows, gap, colGap, rowGap }) => ({
    ...(theme.GRID || {}),
    display: 'grid',
    ...(justify ? { justifyContent: propValueMap[justify] || justify } : {}),
    ...(align ? { alignItems: propValueMap[align] || align } : {}),
    ...(areas ? { gridTemplateAreas: areas } : {}),
    ...(cols ? { gridTemplateColumns: cols } : {}),
    ...(rows ? { gridTemplateRows: rows } : {}),
    ...(gap ? { gap: theme.GAP[gap] } : {}),
    ...(colGap ? { columnGap: theme.GAP[colGap] } : {}),
    ...(rowGap ? { rowGap: theme.GAP[rowGap] } : {}),
  }),
);

const ItemWrapper = styled.div<GridItemProps & any>`
  grid-area: ${({ area }) => area};
`;

const GridComponent: FC<GridProps> = ({ ...props }) => <Component {...props} />;

const Item: FC<GridItemProps> = ({ as, ...itemProps }) => {
  const TargetComponent = {
    Box,
    Flex,
    Grid: GridComponent,
  }[as];

  return <ItemWrapper as={TargetComponent} {...itemProps} />;
};

export const Grid = Object.assign(GridComponent, {
  Item,
});
