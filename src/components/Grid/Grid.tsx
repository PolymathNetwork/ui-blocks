import { FC } from 'react';
import styled from 'styled-components';

import { Box, BoxProps, BoxVariant } from '../Box';

export type GridVariant = BoxVariant;

export type GridProps = BoxProps & {
  cols?: string;
  rows?: string;
  gap?: string;
};

export const Grid: FC<GridProps> = ({ cols, rows, gap, ...props }) => {
  const Component = styled(Box)(({ theme }) => ({
    ...(theme.GRID || {}),
    display: 'grid',
    ...(cols && { gridTemplateColumns: cols }),
    ...(rows && { gridTemplateRows: rows }),
    ...(gap && { gridGap: gap }),
  }));
  return <Component {...props} />;
};
