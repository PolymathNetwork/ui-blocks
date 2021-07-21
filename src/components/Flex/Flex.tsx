import { FC } from 'react';
import styled from 'styled-components';

import { Box, BoxProps, BoxVariant } from '../Box';
import { Justify, Align, propValueMap } from '../../theme/types';

export type FlexVariant = BoxVariant;

export type FlexProps = BoxProps & {
  justify?: Justify;
  align?: Align;
  dir?: 'row' | 'column';
};

export const Flex: FC<FlexProps> = ({
  variant,
  justify,
  align,
  dir,
  ...props
}) => {
  const Component = styled(Box)(({ theme }) => ({
    ...(theme.FLEX || {}),
    display: 'flex',
    ...(justify && { justifyContent: propValueMap[justify] || justify }),
    ...(align && { alignItems: propValueMap[align] || align }),
    ...(dir && { flexDirection: dir }),
  }));
  return <Component variant={variant} {...props} />;
};
