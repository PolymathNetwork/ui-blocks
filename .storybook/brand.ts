import { create } from '@storybook/theming';
import polymathSvg from '../src/theme/icons/svg/polymath.svg';
import { polyTheme } from '../src/theme';

export default create({
  brandTitle: 'Polymath',
  brandImage: polymathSvg,
  base: 'light',
  colorPrimary: polyTheme.blue.COLOR.brandMain,
  barSelectedColor: polyTheme.blue.COLOR.brandMain,
});
