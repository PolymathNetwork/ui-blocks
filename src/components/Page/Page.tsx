import { PropsWithChildren } from 'react';
import styled from 'styled-components';

import { getMargin } from '../../theme/utils';

export type PageProps = PropsWithChildren<{
  margin?: string;
}>;

const Component = styled.div<PageProps>(({ theme, margin }) => ({
  ...(theme.PAGE || {}),
  margin: getMargin({ theme, margin }),
}));

export const Page = (props: PageProps) => <Component {...props} />;
