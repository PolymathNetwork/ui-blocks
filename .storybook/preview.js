import React from 'react';
import { PolyThemeProvider } from '../src/theme';

export const decorators = [
  (Story) => (
    <PolyThemeProvider>
      <Story />
    </PolyThemeProvider>
  ),
];
