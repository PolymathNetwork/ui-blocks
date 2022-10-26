import { PropsWithChildren } from 'react';
import { ThemeProvider } from 'styled-components';

import * as defaultTheme from './definitions/blue';
import { PolyGlobalStyles } from './globalStyles';

type PolyThemeProps = PropsWithChildren<{
  theme: any;
}>;

export const PolyThemeProvider = ({
  theme = defaultTheme,
  children,
}: PolyThemeProps) => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <PolyGlobalStyles />
        {children}
      </>
    </ThemeProvider>
  );
};
