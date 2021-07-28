import { FC } from 'react';
import styled from 'styled-components';

import { propValueMap, Justify, Align } from '../../theme/types';
import { Box, BoxProps, BoxVariant } from '../Box';
import { Flex, FlexProps, FlexVariant } from '../Flex';

export type GridVariant = BoxVariant;

export type GridProps = BoxProps & {
  justify?: Justify;
  align?: Align;
  cols?: string;
  rows?: string;
  gap?: string;
};

export type GridItemProps = BoxProps &
  FlexProps &
  GridProps & {
    as: 'Box' | 'Flex' | 'Grid';
    variant: BoxVariant | FlexVariant | GridVariant;
    area: string;
  };

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
