import { FC } from 'react';
import styled from 'styled-components';

import { Justify, Align, propValueMap } from '../../theme/types';
import { Box, BoxVariant, BoxProps } from '../Box';

export type FlexVariant = BoxVariant;

export type FlexProps = BoxProps & {
  justify?: Justify;
  align?: Align;
  dir?: 'row' | 'column';
};

const Component = styled(Box)<FlexProps>(({ justify, align, dir, theme }) => ({
  ...(theme.FLEX || {}),
  display: 'flex',
  ...(justify && { justifyContent: propValueMap[justify] || justify }),
  ...(align && { alignItems: propValueMap[align] || align }),
  ...(dir && { flexDirection: dir }),
}));

export const Flex: FC<FlexProps> = (props) => {
  return <Component {...props} />;
};
