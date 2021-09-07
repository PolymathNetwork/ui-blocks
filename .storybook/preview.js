import React, { useEffect, useState } from 'react';
import { addDecorator } from '@storybook/react';
import { withThemes } from 'storybook-addon-themes/react';

import { PolyThemeProvider } from '../src/themeSettings';
import { polyTheme as blueTheme } from '../src';
import { pinkTheme } from '../src/themes/polyPink';

addDecorator(withThemes);

//think of enums
const PolymathDefault = 'PolymathDefault';
const Pink = 'Pink';

const Themes = {
  // PolymathDefault is the blueish theme
  PolymathDefault: PolymathDefault,
  Pink: Pink,
}

const Component = (props) => {
  const { themeName } = props;


  let currentTheme = blueTheme;
  switch (themeName) {
    case Themes.PolymathDefault:
      currentTheme = blueTheme;
      break;
    case Themes.Pink:
      currentTheme = pinkTheme
      break;
  }

  //the props.children is the <Story /> component 
  return (
    <PolyThemeProvider theme={blueTheme}>
      {props.children}
    </PolyThemeProvider>
  )
};

export const parameters = {
  themes: {
    default: 'Polymath',
    Decorator: (props) => {
      return (<Component {...props} />);
    },
    list: [
      {
        name: Themes.PolymathDefault, color: blueTheme.COLOR.brandMain
      },
      { name: Themes.Pink, color: pinkTheme.COLOR.brandMain }
    ],
  },
};;