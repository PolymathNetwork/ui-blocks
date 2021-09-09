import React, { useEffect, useState } from 'react';
import { addDecorator } from '@storybook/react';
import { withThemes } from 'storybook-addon-themes/react';

import { PolyThemeProvider } from '../src/theme';
import { polyTheme } from '../src';

addDecorator(withThemes);

enum Themes {
  Blue = 'Blue - PolymathDefault',
  Pink = 'Pink',
};

const Component = (props) => {
  const { themeName } = props;


  let currentTheme = polyTheme.blue;
  switch (themeName) {
    case Themes.Blue:
      currentTheme = polyTheme.blue;
      break;
    case Themes.Pink:
      currentTheme = polyTheme.pink;
      break;
  }

  //the props.children is the <Story /> component 
  return (
    <PolyThemeProvider theme={currentTheme}>
      {props.children}
    </PolyThemeProvider>
  )
};

export const parameters = {
  themes: {
    default: Themes.Blue,
    Decorator: (props) => {
      return (<Component {...props} />);
    },
    list: [
      {
        name: Themes.Blue, color: polyTheme.blue.COLOR.brandMain
      },
      { name: Themes.Pink, color: polyTheme.pink.COLOR.brandMain }
    ],
  },
};;