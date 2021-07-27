import * as polyIcons from './icons';
import { CSSPropertiesExtended } from './types';
import { BoxVariant } from '../components/Box/Box';
import { ButtonVariant } from '../components/Button/Button';
import { IconVariant } from '../components/Icon/Icon';
import { TextVariant } from '../components/Text/Text';

// eslint-disable-next-line import/no-cycle
import { AttentionBoxVariant } from '../components/AttentionBox/AttentionBox';
import { BadgeVariant } from '../components/Badge/Badge';

// Basics

export const BREAKPOINT = {
  xs: 320,
  sm: 768,
  md: 900,
  lg: 1280,
  xl: 1920,
};

export const MEDIA_QUERY = {
  xs: `@media (max-width: ${BREAKPOINT.xs}px)`,
  sm: `@media (min-width: ${BREAKPOINT.sm}px)`,
  md: `@media (min-width: ${BREAKPOINT.md}px)`,
  lg: `@media (min-width: ${BREAKPOINT.lg}px)`,
  xl: `@media (min-width: ${BREAKPOINT.xl}px)`,
};

export const GAP = {
  xs: '8px',
  s: '16px',
  m: '24px',
  l: '32px',
  xl: '40px',
  xxl: '48px',
  xxxl: '96px',
};

export const COLOR = {
  light: '#FFFFFF',
  gray1: '#152935',
  gray2: '#6C7D89',
  gray3: '#8C9BA5',
  gray4: '#D6DDE8',
  gray5: '#EBF0F7',
  gray6: '#F8F9FC',
  brandBg: '#FAFDFF',
  brandMain: '#1348E4',
  brandLight: '#6DC7F7',
  brandLight2: '#C0E3FF',
  brandLightest: '#DCEFFE',
  brandDark: '#0024BD',
  brandDark2: '#170087',
  success: '#00AA5E',
  success2: '#D4F7E7',
  warning: '#EFC100',
  warning2: '#FBF3D0',
  warning3: '#E3A30C',
  danger: '#DB2C3E',
  danger2: '#FAE6E8',
  teal800: '#285E61',
  teal100: '#E6FFFA',
  cyan800: '#046C7C',
  cyan100: '#E6F9FE',
  indigo800: '#434190',
  indigo100: '#EBF4FF',
  orange800: '#B03C02',
  orange100: '#FFEAE1',
  purple800: '#553C9A',
  purple100: '#FAF5FF',
  plum800: '#4D0198',
  plum100: '#F2E6FF',
  pink800: '#97266D',
  pink600: '#EC4673',
  pink100: '#FFEBF1',
  lime800: '#447803',
  lime100: '#F1FEE1',
  overlay: 'background: rgba(21, 41, 53, 0.3);',
  gradient: `linear-gradient(
    180.63deg,
    #DCEFFE 0.03%,
    rgba(220, 239, 254, 0) 79.96%
  )`,
};

export const SHADOW = {
  1: '0px 1px 3px rgba(21, 41, 53, 0.12), 0px 1px 2px rgba(21, 41, 53, 0.24)',
  2: '0px 2px 4px rgba(0, 0, 0, 0.16), 0px 3px 6px rgba(21, 41, 53, 0.12)',
  3: '0px 10px 20px rgba(21, 41, 53, 0.15), 0px 3px 6px rgba(21, 41, 53, 0.1)',
  4: '0px 15px 25px rgba(21, 41, 53, 0.15), 0px 5px 10px rgba(21, 41, 53, 0.05)',
  5: '0px 20px 40px rgba(21, 41, 53, 0.1)',
};

export const RADIUS = {
  s: '2px',
  m: '4px',
  l: '8px',
  xl: '16px',
};

export const TYPOGRAPHY = {
  font: "'Inter', sans-serif",
  h1: {
    margin: `0 0 ${GAP.l} 0`,
    lineHeight: '80px',
    fontWeight: 300,
    fontSize: '60px',
    color: COLOR.gray1,
    letterSpacing: '-1px',
  },
  h2: {
    margin: `0 0 ${GAP.m} 0`,
    lineHeight: '66px',
    fontWeight: 400,
    fontSize: '48px',
    color: COLOR.gray1,
    letterSpacing: '-0.5px',
  },
  h3: {
    margin: `0 0 ${GAP.m} 0`,
    lineHeight: '47px',
    fontWeight: 500,
    fontSize: '34px',
    color: COLOR.gray1,
    letterSpacing: '-0.25px',
  },
  h4: {
    margin: `0 0 ${GAP.m} 0`,
    lineHeight: '34px',
    fontWeight: 500,
    fontSize: '24px',
    color: COLOR.gray1,
  },
  h5: {
    margin: `0 0 ${GAP.s} 0`,
    lineHeight: '29px',
    fontWeight: 500,
    fontSize: '20px',
    color: COLOR.gray1,
    letterSpacing: '0.15px',
  },
  h6: {
    margin: `0 0 ${GAP.s} 0`,
    lineHeight: '27px',
    fontWeight: 400,
    fontSize: '18px',
    color: COLOR.gray1,
  },
  b1m: {
    fontWeight: 500,
    fontSize: '16px',
    lineHeight: '27px',
    color: COLOR.gray1,
  },
  b1: {
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '27px',
    color: COLOR.gray1,
  },
  b2m: {
    fontWeight: 500,
    fontSize: '14px',
    lineHeight: '24px',
    color: COLOR.gray1,
  },
  b2: {
    fontWeight: 400,
    fontSize: '14px',
    lineHeight: '24px',
    color: COLOR.gray1,
  },
  b3m: {
    fontWeight: 500,
    fontSize: '12px',
    lineHeight: '19px',
    color: COLOR.gray1,
  },
  b3: {
    fontWeight: 400,
    fontSize: '12px',
    lineHeight: '19px',
    color: COLOR.gray1,
  },
  c1: {
    fontWeight: 500,
    fontSize: '14px',
    lineHeight: '20px',
    color: COLOR.gray1,
    letterSpacing: '0.5px',
  },
  c2: {
    fontWeight: 500,
    fontSize: '12px',
    lineHeight: '15px',
    color: COLOR.gray1,
    letterSpacing: '0.4px',
  },
  btn: {
    fontWeight: 500,
    fontSize: '14px',
    lineHeight: '16px',
    color: COLOR.gray1,
    letterSpacing: '0.75px',
  },
  tn: {
    fontWeight: 400,
    fontSize: '14px',
    lineHeight: '17px',
    color: COLOR.gray1,
    letterSpacing: '0.75px',
  },
  code: {
    fontFamily: 'monospace',
    fontWeight: 400,
    fontSize: '12px',
    lineHeight: '19px',
    color: COLOR.gray1,
  },
};

export const ICONS = { ...polyIcons };

// Components

export const ICON: Record<IconVariant, CSSPropertiesExtended> = {
  basic: {
    fill: COLOR.brandMain,
  },
  circle: {
    fill: COLOR.brandMain,
    backgroundColor: COLOR.brandLightest,
    borderRadius: '50%',
  },
};

export const BUTTON: Record<ButtonVariant, CSSPropertiesExtended> = {
  primary: {
    ...TYPOGRAPHY.btn,
    color: COLOR.light,
    background: COLOR.brandMain,
    border: 0,
    borderRadius: RADIUS.l,
    boxShadow: SHADOW[2],
    transition: 'all 0.3s',
    cursor: 'pointer',
    '&:hover': {
      background: COLOR.brandDark,
    },
    '&:active': {
      background: COLOR.brandDark2,
    },
    '&:disabled': {
      color: COLOR.gray3,
      background: COLOR.gray5,
      cursor: 'no-drop',
    },
  },
  secondary: {
    ...TYPOGRAPHY.btn,
    color: COLOR.gray1,
    background: COLOR.gray5,
    border: 0,
    borderRadius: RADIUS.l,
    transition: 'all 0.3s',
    cursor: 'pointer',
    '&:hover': {
      color: COLOR.brandMain,
      background: COLOR.brandLightest,
    },
    '&:active': {
      color: COLOR.brandMain,
      background: COLOR.brandLight2,
    },
    '&:disabled': {
      color: COLOR.gray3,
      background: COLOR.gray5,
      cursor: 'no-drop',
    },
  },
  tertiary: {
    ...TYPOGRAPHY.btn,
    color: COLOR.gray1,
    background: 'transparent',
    border: 0,
    borderRadius: RADIUS.l,
    transition: 'all 0.3s',
    cursor: 'pointer',
    '&:hover': {
      background: COLOR.gray5,
    },
    '&:active': {
      background: COLOR.gray4,
    },
    '&:disabled': {
      color: COLOR.gray3,
      cursor: 'no-drop',
    },
  },
  inline: {
    display: 'inline',
    margin: 0,
    padding: 0,
    border: 0,
    borderRadius: 0,
    lineHeight: 'inherit',
    fontWeight: 'inherit',
    fontSize: 'inherit',
    letterSpacing: 'inherit',
    color: 'inherit',
    background: 'transparent',
    cursor: 'pointer',
  },
};

export const BOX: Record<BoxVariant, CSSPropertiesExtended> = {
  raw: {},
  basic: {
    padding: GAP.m,
  },
  border: {
    padding: GAP.m,
    border: `1px solid ${COLOR.gray3}`,
    borderRadius: RADIUS.m,
  },
  shadow: {
    padding: GAP.m,
    borderRadius: RADIUS.m,
    boxShadow: SHADOW[1],
  },
};

export const TEXT: Record<TextVariant, CSSPropertiesExtended> = {
  p: {
    margin: `0 0 ${GAP.s} 0`,
    lineHeight: '27px',
    fontWeight: 'inherit',
    fontSize: 'inherit',
    color: COLOR.gray2,
  },
  span: {
    lineHeight: 'inherit',
    fontWeight: 'inherit',
    fontSize: 'inherit',
    color: 'inherit',
  },
  label: {
    lineHeight: 'inherit',
    fontWeight: 'inherit',
    fontSize: 'inherit',
    color: 'inherit',
  },
};

export const BADGE: Record<BadgeVariant, CSSPropertiesExtended> = {
  basic: {
    ...TYPOGRAPHY.b3m,
    color: COLOR.brandMain,
    backgroundColor: COLOR.brandLightest,
    borderRadius: '100px',
  },
  success: {
    ...TYPOGRAPHY.b3m,
    color: COLOR.success,
    backgroundColor: COLOR.success2,
    borderRadius: '100px',
  },
  warning: {
    ...TYPOGRAPHY.b3m,
    color: COLOR.warning,
    backgroundColor: COLOR.warning2,
    borderRadius: '100px',
  },
  danger: {
    ...TYPOGRAPHY.b3m,
    color: COLOR.danger,
    backgroundColor: COLOR.danger2,
    borderRadius: '100px',
  },
};

export const INPUT: CSSPropertiesExtended = {
  padding: `0 ${GAP.s}`,
  lineHeight: '40px',
  fontWeight: 'inherit',
  fontSize: 'inherit',
  color: COLOR.gray1,
  border: `1px solid ${COLOR.gray3}`,
  borderRadius: RADIUS.s,
  transition: 'all 0.3s',
  backgroundColor: COLOR.light,
  '&:focus': {
    borderColor: COLOR.brandMain,
  },
  '&:disabled': {
    borderColor: COLOR.gray5,
    backgroundColor: COLOR.gray5,
  },
};

export const DATEPICKER: CSSPropertiesExtended = {
  padding: GAP.s,
  backgroundColor: COLOR.light,
  border: `1px solid ${COLOR.gray4}`,
  borderRadius: RADIUS.l,
  boxShadow: SHADOW[3],
  lineHeight: 'normal',
  '.DayPicker': {
    '&-wrapper': {
      margin: 0,
      padding: 0,
    },
    '&-NavButton': {
      margin: 0,
      padding: 0,
      backgroundImage: 'none',
      borderStyle: 'solid',
      borderWidth: '2px 2px 0 0',
      height: '7px',
      width: '7px',
      color: COLOR.gray2,
      top: '20px',
      right: '10px',
      transform: 'rotate(45deg)',
      '&--prev': {
        right: '50px',
        transform: 'rotate(-135deg)',
      },
    },
    '&-Month': {
      margin: 0,
    },
    '&-Caption': {
      ...TYPOGRAPHY.b3,
      color: COLOR.gray2,
      paddingTop: '15px',
      marginBottom: '20px',
    },
    '&-Day': {
      margin: 0,
      padding: 0,
      borderRadius: 0,
      width: '20px',
      ...TYPOGRAPHY.b3,
      color: COLOR.gray1,
      lineHeight: '30px',
      '&--selected': {
        backgroundColor: COLOR.brandMain,
      },
      '&--disabled': {
        color: COLOR.gray4,
      },
      '&--outside': {
        color: COLOR.gray2,
      },
    },
  },
};

export const PAGE: CSSPropertiesExtended = {
  padding: '0 124px',
  maxWidth: '1600px',
  minHeight: '70vh',
};

export const SELECT: any = {
  container: (styles: any) => ({
    ...styles,
    minWidth: '112px',
  }),
  control: (styles: any, state: any) => ({
    ...styles,
    backgroundColor: COLOR.light,
    borderRadius: RADIUS.m,
    borderColor: COLOR.gray3,
    ...(state.isFocused
      ? {
          borderColor: COLOR.brandMain,
          '&:hover': {
            borderColor: COLOR.brandMain,
          },
        }
      : {}),
    cursor: 'pointer',
  }),
  valueContainer: (styles: any) => ({
    ...styles,
    ...TYPOGRAPHY.b2,
  }),
  menu: (styles: any) => ({
    ...styles,
    backgroundColor: COLOR.light,
    boxShadow: SHADOW[2],
  }),
  menuPortal: (styles: any) => ({
    ...styles,
    zIndex: 1000,
  }),
  option: (styles: any, state: any) => ({
    ...styles,
    color: COLOR.gray1,
    ...(state.isSelected
      ? {
          color: COLOR.gray1,
          backgroundColor: COLOR.gray5,
        }
      : {}),
    '&:hover': {
      color: COLOR.gray1,
      backgroundColor: COLOR.brandLightest,
    },
    cursor: 'pointer',
  }),
};

export const ATTENTIONBOX: Record<
  AttentionBoxVariant,
  CSSPropertiesExtended
> = {
  basic: {
    minWidth: '240px',
    display: 'inline-block',
    padding: GAP.s,
    border: '2px solid #F0F0F0',
    sizing: 'border-box',
    borderRadius: GAP.xs,
    fontSize: '14px',
    fontWeight: 400,
  },
  compact: {
    minWidth: '240px',
    display: 'inline-block',
    padding: GAP.s,
    borderLeft: `2px solid ${COLOR.brandMain}`,
    fontSize: '14px',
    fontWeight: 400,
  },
};
