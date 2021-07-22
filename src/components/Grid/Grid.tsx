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

const GridComponent: FC<GridProps> = ({
  justify,
  align,
  cols,
  rows,
  gap,
  ...props
}) => {
  const Component = styled(Box)(({ theme }) => ({
    ...(theme.GRID || {}),
    display: 'grid',
    ...(justify && { justifyContent: propValueMap[justify] || justify }),
    ...(align && { alignItems: propValueMap[align] || align }),
    ...(cols && { gridTemplateColumns: cols }),
    ...(rows && { gridTemplateRows: rows }),
    ...(gap && { gridGap: gap }),
  }));
  return <Component {...props} />;
};

type GridItemProps = BoxProps &
  FlexProps &
  GridProps & {
    as: 'Box' | 'Flex' | 'Grid';
    variant: BoxVariant | FlexVariant | GridVariant;
    area: string;
  };
const Item: FC<GridItemProps> = ({ as, area, ...itemProps }) => {
  const TargetComponent = {
    Box,
    Flex,
    Grid: GridComponent,
  }[as];
  const ItemWrapper = styled(TargetComponent)({
    gridArea: area,
  });
  return <ItemWrapper {...itemProps} />;
};

export const Grid = Object.assign(GridComponent, {
  Item,
});
