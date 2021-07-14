import { createGlobalStyle } from 'styled-components';
import 'focus-visible';

import '../assets/fonts/inter.css';

export const PolyGlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    background-color: ${({ theme }: any) => theme.COLOR.light};
    font-family: ${({ theme }: any) => theme.TYPOGRAPHY.font};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  *, *:before, *:after {
    box-sizing: border-box;
  }

  button, html [type="button"], [type="reset"], [type="submit"] {
    -webkit-appearance: none;
  }

  /*
    This will hide the focus indicator if the element receives focus via the mouse,
    but it will still show up on keyboard focus.
  */
  .js-focus-visible :focus:not(.focus-visible) {
    outline: none;
  }
`;
