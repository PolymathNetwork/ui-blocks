import { create } from '@storybook/theming';
import polymathSvg from '../src/themeSettings/icons/svg/polymath.svg';
import { polyTheme } from '../src/themeSettings';

export default create({
  brandTitle: 'Polymath',
  brandImage: polymathSvg,
  base: 'light',
  colorPrimary: polyTheme.COLOR.brandMain,
  barSelectedColor: polyTheme.COLOR.brandMain,
});
