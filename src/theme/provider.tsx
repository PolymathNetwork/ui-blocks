import { ThemeProvider } from 'styled-components';

import * as defaultTheme from './definitions/blue';
import { PolyGlobalStyles } from './globalStyles';

export const PolyThemeProvider = ({
  theme = defaultTheme,
  children,
}: {
  theme: any;
  children: any;
}) => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <PolyGlobalStyles />
        {children}
      </>
    </ThemeProvider>
  );
};
