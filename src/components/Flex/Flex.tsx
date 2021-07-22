import { FC } from 'react';
import styled from 'styled-components';

import { Box, BoxProps, BoxVariant } from '../Box';
import { Justify, Align, propValueMap } from '../../theme/types';

export type FlexVariant = BoxVariant;

export type FlexProps = BoxProps & {
  justify?: Justify;
  align?: Align;
  dir?: 'row' | 'column';
  display?: 'flex' | 'inline-flex';
};

export const Flex: FC<FlexProps> = ({
  variant,
  display = 'flex',
  justify,
  align,
  dir,
  ...props
}) => {
  const Component = styled(Box)(({ theme }) => ({
    ...(theme.FLEX || {}),
    ...(display && { display }),
    ...(justify && { justifyContent: propValueMap[justify] || justify }),
    ...(align && { alignItems: propValueMap[align] || align }),
    ...(dir && { flexDirection: dir }),
  }));
  return <Component variant={variant} {...props} />;
};
