import React from 'react';
import { addDecorator } from '@storybook/react';
import { withThemes } from 'storybook-addon-themes/react';

import { PolyThemeProvider, polyTheme } from '../src/theme';

addDecorator(withThemes);

enum Themes {
  Blue = 'Blue (Polymath)',
  Pink = 'Pink (Polymesh)',
  Launchpad = 'Launchpad',
}

const Decorator = ({ themeName, children }) => {
  let currentTheme: any = polyTheme.blue;
  switch (themeName) {
    case Themes.Blue:
      currentTheme = polyTheme.blue;
      break;
    case Themes.Pink:
      currentTheme = polyTheme.pink;
      break;
    case Themes.Launchpad:
      currentTheme = polyTheme.launchpad;
      break;
  }
  return <PolyThemeProvider theme={currentTheme}>{children}</PolyThemeProvider>;
};

export const parameters = {
  themes: {
    Decorator,
    default: Themes.Launchpad,
    list: [
      {
        name: Themes.Blue,
        color: polyTheme.blue.COLOR.brandMain,
      },
      {
        name: Themes.Pink,
        color: polyTheme.pink.COLOR.brandMain,
      },
      {
        name: Themes.Launchpad,
        color: polyTheme.launchpad.COLOR.brandMain,
      },
    ],
  },
};
