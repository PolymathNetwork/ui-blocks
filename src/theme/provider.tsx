import { FC } from 'react';
import { ThemeProvider } from 'styled-components';

import * as defaultTheme from './definitions/blue';
import { PolyGlobalStyles } from './globalStyles';

export const PolyThemeProvider: FC<{
  theme: any;
}> = ({ theme = defaultTheme, children }) => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <PolyGlobalStyles />
        {children}
      </>
    </ThemeProvider>
  );
};
