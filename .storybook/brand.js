import { create } from '@storybook/theming';
import polymathSvg from '../src/assets/svg/polymath.svg';
import { polyTheme } from '../src/theme';

export default create({
  brandTitle: 'Polymath',
  brandImage: polymathSvg,
  base: 'light',
  colorPrimary: polyTheme.COLOR.brandMain,
  barSelectedColor: polyTheme.COLOR.brandMain,
});
