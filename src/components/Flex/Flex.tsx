import { FC } from 'react';
import styled from 'styled-components';

import { Box, BoxProps, BoxVariant } from '../Box';

export type FlexVariant = BoxVariant;

export type FlexProps = BoxProps & {
  justify?: 'spaced' | 'center' | 'start' | 'end';
  align?: 'center' | 'start' | 'end';
  dir?: 'row' | 'column';
  display?: 'flex' | 'inline-flex';
};

const propValueMap: Record<string, string> = {
  spaced: 'space-between',
  start: 'flex-start',
  end: 'flex-end',
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
