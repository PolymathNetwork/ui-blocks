import { FC } from 'react';
import styled from 'styled-components';

import { getMargin } from '../../theme/utils';

export type PageProps = {
  margin?: string;
};

export const Page: FC<PageProps> = ({ margin, ...props }) => {
  const Component = styled.div(({ theme }) => ({
    ...(theme.PAGE || {}),
    margin: getMargin({ theme, margin }),,
  }));
  return <Component {...props} />;
};
