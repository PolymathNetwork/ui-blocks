import { FC } from 'react';
import styled from 'styled-components';

import { Box, BoxProps, BoxVariant } from '../Box';
import { Justify, Align, propValueMap } from '../../theme/types';

export type GridVariant = BoxVariant;

export type GridProps = BoxProps & {
  justify?: Justify;
  align?: Align;
  cols?: string;
  rows?: string;
  gap?: string;
};

export const Grid: FC<GridProps> = ({
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
