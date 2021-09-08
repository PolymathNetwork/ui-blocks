import React, { useEffect, useState } from 'react';
import { addDecorator } from '@storybook/react';
import { withThemes } from 'storybook-addon-themes/react';

import { PolyThemeProvider } from '../src/themeSettings';
import { polyTheme as blueTheme } from '../src';
import { pinkTheme } from '../src/themes';

addDecorator(withThemes);

//think of enums
const Blue = 'Blue - PolymathDefault';
const Pink = 'Pink';

const Themes = {
  Blue: Blue,
  Pink: Pink,
}

const Component = (props) => {
  const { themeName } = props;


  let currentTheme = blueTheme;
  switch (themeName) {
    case Themes.Blue:
      currentTheme = blueTheme;
      break;
    case Themes.Pink:
      currentTheme = pinkTheme
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
    default: Themes.PolymathDefault,
    Decorator: (props) => {
      return (<Component {...props} />);
    },
    list: [
      {
        name: Themes.Blue, color: blueTheme.COLOR.brandMain
      },
      { name: Themes.Pink, color: pinkTheme.COLOR.brandMain }
    ],
  },
};;