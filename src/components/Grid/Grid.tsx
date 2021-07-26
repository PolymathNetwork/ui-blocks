import { FC } from 'react';
import styled from 'styled-components';

import { Box, BoxProps, BoxVariant } from '../Box';
import { Flex, FlexProps, FlexVariant } from '../Flex';
import { Justify, Align, propValueMap } from '../../theme/types';

export type GridVariant = BoxVariant;

export type GridProps = BoxProps & {
  justify?: Justify;
  align?: Align;
  cols?: string;
  rows?: string;
  gap?: string;
};

const Component = styled(Box)<GridProps>(
  ({ theme, justify, align, cols, rows, gap }) => ({
    ...(theme.GRID || {}),
    display: 'grid',
    ...(justify && { justifyContent: propValueMap[justify] || justify }),
    ...(align && { alignItems: propValueMap[align] || align }),
    ...(cols && { gridTemplateColumns: cols }),
    ...(rows && { gridTemplateRows: rows }),
    ...(gap && { gridGap: gap }),
  })
);

const GridComponent: FC<GridProps> = ({ ...props }) => {
  return <Component {...props} />;
};

type GridItemProps = BoxProps &
  FlexProps &
  GridProps & {
    as: 'Box' | 'Flex' | 'Grid';
    variant: BoxVariant | FlexVariant | GridVariant;
    area: string;
  };

const ItemWrapper = styled.div<GridItemProps & any>`
  grid-area: ${({ area }) => area};
`;

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
