import { FC } from 'react';
import styled from 'styled-components';

import { Box, BoxProps } from '../Box';

export type FlexProps = BoxProps & {
  justify?: 'spaced' | 'center' | 'start' | 'end';
  align?: 'center' | 'start' | 'end';
  dir?: 'row' | 'column';
};

const propValueMap: Record<string, string> = {
  spaced: 'space-between',
  start: 'flex-start',
  end: 'flex-end',
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
