import { FC } from 'react';
import { Box } from '../Box';
import { Flex } from '../Flex';
import { GridItemProps, GridProps } from './types';
import { Component, ItemWrapper } from './styles';

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
