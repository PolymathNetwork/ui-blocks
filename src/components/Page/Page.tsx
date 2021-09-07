import { FC } from 'react';
import styled from 'styled-components';

import { getMargin } from '../../themeSettings/utils';

export type PageProps = {
  margin?: string;
};

const Component = styled.div<PageProps>(({ theme, margin }) => ({
  ...(theme.PAGE || {}),
  margin: getMargin({ theme, margin }),
}));

export const Page: FC<PageProps> = (props) => <Component {...props} />;
