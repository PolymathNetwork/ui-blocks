import { createGlobalStyle } from 'styled-components';

import * as polyIcons from '../icons';
import { CSSPropertiesExtended, Gap, Shadow, Radius } from '../types';
import { BoxVariant } from '../../components/Box';
import { ButtonVariant } from '../../components/Button';
import { IconVariant } from '../../components/Icon';
import { TextAs } from '../../components/Text';
import { BadgeVariant } from '../../components/Badge';
import { InfoBoxSize, InfoBoxVariant } from '../../components/InfoBox';
import { DrawerVariant } from '../../components/Drawer';
import { ChipsVariant } from '../../components/Chips';
import { NotificationVariant } from '../../components/Notification';

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

export const GAP: Record<Gap, string> = {
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
  gray2: '#5B6F7E',
  gray3: '#8C9BA5',
  gray4: '#D6DDE8',
  gray5: '#EBF0F7',
  gray6: '#F8F9FC',
  gray7: '#F0F0F0',
  brandBg: '#1A56AF',
  brandMain: '#1A56AF',
  brandLighter: '#E1EEFD',
  brandLight: '#BBD7FB',
  brandLightest: '#E1EEFD',
  brandDark: '#124185',
  brandDarkest: '#002D61',
  brandDark2: '#002D61',
  success: '#004A29',
  success2: '#009F58',
  success3: '#DFFFF1',
  warning: '#604D00',
  warning2: '#EBBC00',
  warning3: '#FFF9E0',
  danger: '#A61C2A',
  danger2: '#DB2C3E',
  danger3: '#FBE5E7',
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
  pink100: '#FFEBF1',
  lime800: '#447803',
  lime100: '#F1FEE1',
  transparent: 'transparent',
  overlay: 'background: rgba(21, 41, 53, 0.3);',
  gradient: `linear-gradient(
    180.63deg,
    #DCEFFE 0.03%,
    rgba(220, 239, 254, 0) 79.96%
  )`,
};

export const SHADOW: Record<Shadow, string> = {
  xs: '0px 1px 3px rgba(21, 41, 53, 0.12), 0px 1px 2px rgba(21, 41, 53, 0.24)',
  s: '0px 2px 4px rgba(0, 0, 0, 0.16), 0px 3px 6px rgba(21, 41, 53, 0.12)',
  m: '0px 10px 20px rgba(21, 41, 53, 0.15), 0px 3px 6px rgba(21, 41, 53, 0.1)',
  l: '0px 15px 25px rgba(21, 41, 53, 0.15), 0px 5px 10px rgba(21, 41, 53, 0.05)',
  xl: '0px 20px 40px rgba(21, 41, 53, 0.1)',
};

export const RADIUS: Record<Radius, string> = {
  s: '2px',
  m: '4px',
  l: '8px',
  xl: '16px',
};

export const TYPOGRAPHY: any = {
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
    fontWeight: 500,
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
    backgroundColor: COLOR.brandMain,
    borderRadius: '50%',
  },
};

export const BUTTON: Record<ButtonVariant, CSSPropertiesExtended> = {
  primary: {
    ...TYPOGRAPHY.btn,
    display: 'flex',
    justifyContent: 'center',
    fontFamily: "'Poppins', sans-serif",
    lineHeight: '24px',
    color: COLOR.light,
    background: COLOR.brandMain,
    border: 0,
    borderRadius: RADIUS.l,
    padding: '12px 16px',
    transition: 'all 0.3s',
    cursor: 'pointer',
    '&:hover': {
      background: COLOR.brandDark,
    },
    '&:active': {
      background: COLOR.brandDarkest,
    },
    '&:disabled': {
      color: COLOR.gray3,
      background: COLOR.gray5,
      cursor: 'no-drop',
      svg: {
        path: {
          fill: COLOR.gray3,
        },
      },
    },
  },
  secondary: {
    ...TYPOGRAPHY.btn,
    display: 'flex',
    justifyContent: 'center',
    fontFamily: "'Poppins', sans-serif",
    lineHeight: '24px',
    color: COLOR.brandMain,
    background: COLOR.light,
    border: `1px solid ${COLOR.brandMain}`,
    borderRadius: RADIUS.l,
    transition: 'all 0.3s',
    cursor: 'pointer',
    '&:hover': {
      color: COLOR.brandMain,
      background: COLOR.brandLightest,
    },
    '&:active': {
      color: COLOR.brandMain,
      background: COLOR.brandLight,
      borderColor: COLOR.brandMain,
    },
    '&:disabled': {
      border: `1px solid ${COLOR.gray5}`,
      color: COLOR.gray3,
      background: COLOR.light,
      cursor: 'no-drop',
      svg: {
        path: {
          fill: COLOR.gray3,
        },
      },
    },
  },
  tertiary: {
    ...TYPOGRAPHY.btn,
    display: 'flex',
    justifyContent: 'center',
    fontFamily: "'Poppins', sans-serif",
    lineHeight: '24px',
    color: COLOR.brandMain,
    background: 'transparent',
    border: 0,
    borderRadius: RADIUS.l,
    transition: 'all 0.3s',
    cursor: 'pointer',
    '&:hover': {
      background: COLOR.brandLightest,
    },
    '&:active': {
      background: COLOR.brandLight,
    },
    '&:disabled': {
      color: COLOR.gray3,
      cursor: 'no-drop',
      svg: {
        path: {
          fill: COLOR.gray3,
        },
      },
    },
  },
  inline: {
    display: 'inline',
    margin: 0,
    padding: 0,
    border: 0,
    borderRadius: 0,
    lineHeight: 'inherit',
    fontFamily: "'Poppins', sans-serif",
    fontWeight: 'inherit',
    fontSize: 'inherit',
    letterSpacing: 'inherit',
    color: 'inherit',
    background: 'transparent',
    cursor: 'pointer',
  },
  special: {
    ...TYPOGRAPHY.btn,
    display: 'flex',
    justifyContent: 'center',
    lineHeight: '22px',
    fontFamily: "'Poppins', sans-serif",
    fontSize: '14px',
    color: COLOR.gray1,
    background: COLOR.light,
    border: `1px solid ${COLOR.gray1}`,
    borderRadius: RADIUS.l,
    padding: '12px 16px',
    transition: 'all 0.3s',
    cursor: 'pointer',
    '&:hover:enabled': {
      background: COLOR.gray5,
    },
    '&:active': {
      background: COLOR.gray4,
    },
    '&:disabled': {
      color: COLOR.gray3,
      border: `1px solid ${COLOR.gray3}`,
      cursor: 'no-drop',
      svg: {
        path: {
          fill: COLOR.gray3,
        },
      },
    },
  },
};

export const BOX: Record<BoxVariant, CSSPropertiesExtended> = {
  raw: {},
  basic: {
    backgroundColor: COLOR.light,
  },
  border: {
    backgroundColor: COLOR.light,
    border: `1px solid ${COLOR.gray3}`,
    borderRadius: RADIUS.m,
  },
  shadow: {
    backgroundColor: COLOR.light,
    borderRadius: RADIUS.m,
    boxShadow: SHADOW.s,
  },
};

export const TEXT: Record<TextAs, CSSPropertiesExtended> = {
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
  default: {
    ...TYPOGRAPHY.b3m,
    color: COLOR.brandDark,
    backgroundColor: COLOR.brandLightest,
    borderRadius: '100px',
  },
  success: {
    ...TYPOGRAPHY.b3m,
    color: COLOR.success,
    backgroundColor: COLOR.success3,
    borderRadius: '100px',
  },
  warning: {
    ...TYPOGRAPHY.b3m,
    color: COLOR.warning,
    backgroundColor: COLOR.warning3,
    borderRadius: '100px',
  },
  danger: {
    ...TYPOGRAPHY.b3m,
    color: COLOR.danger2,
    backgroundColor: COLOR.danger3,
    borderRadius: '100px',
  },
};

export const INPUT: CSSPropertiesExtended = {
  ...TYPOGRAPHY.b2,
  padding: `${GAP.xs} ${GAP.s}`,
  border: `1px solid ${COLOR.gray3}`,
  borderRadius: RADIUS.s,
  transition: 'all 0.3s',
  backgroundColor: COLOR.light,
  '&:hover': {
    borderColor: COLOR.gray2,
  },
  '&:focus': {
    borderColor: COLOR.brandMain,
  },
  '&:disabled': {
    borderColor: COLOR.gray5,
    backgroundColor: COLOR.light,
    color: COLOR.gray3,
    cursor: 'not-allowed',
  },
  '&:readOnly': {
    borderColor: 'transparent',
    backgroundColor: COLOR.gray5,
    color: COLOR.gray2,
    '&:hover': {
      borderColor: 'transparent',
    },
    '&:focus': {
      borderColor: 'transparent',
    },
  },
  '::placeholder': {
    color: COLOR.gray3,
  },
};

export const DATEPICKER: CSSPropertiesExtended = {
  padding: GAP.s,
  backgroundColor: COLOR.light,
  border: `1px solid ${COLOR.gray4}`,
  borderRadius: RADIUS.l,
  boxShadow: SHADOW.m,
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
        backgroundColor: `${COLOR.brandMain} !important`,
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
    backgroundColor: state.selectProps.readonly ? COLOR.gray5 : COLOR.light,
    borderRadius: RADIUS.m,
    ...(state.selectProps.isDisabled
      ? {
          borderColor: COLOR.gray5,
        }
      : state.selectProps.readonly
      ? {
          borderColor: 'transparent',
        }
      : {
          borderColor: COLOR.gray3,
        }),
    '&:hover': {
      borderColor: state.selectProps.readonly ? 'transparent' : COLOR.gray2,
    },
    ...(state.isFocused
      ? {
          borderColor: COLOR.brandMain,
          '&:hover': {
            borderColor: COLOR.brandMain,
          },
        }
      : {}),
    cursor: state.selectProps.readonly ? 'not-allowed' : 'pointer',
  }),
  option: (styles: any, state: any) => ({
    ...styles,
    padding: '8px 9px',
    ...TYPOGRAPHY.b2,
    color: COLOR.gray1,
    ...(state.isSelected
      ? {
          color: COLOR.gray1,
          backgroundColor: COLOR.gray5,
        }
      : {}),
    '&:hover': {
      color: COLOR.gray1,
      backgroundColor: COLOR.gray6,
    },
    cursor: 'pointer',
  }),
  valueContainer: (styles: any) => ({
    ...styles,
    ...TYPOGRAPHY.b2,
  }),
  placeholder: (styles: any) => ({
    ...styles,
    ...TYPOGRAPHY.b2,
    color: COLOR.gray3,
  }),
  menu: (styles: any) => ({
    ...styles,
    backgroundColor: COLOR.light,
    boxShadow: SHADOW.s,
  }),
  menuList: (styles: any) => ({
    ...styles,
    padding: '0px',
  }),
  menuPortal: (styles: any) => ({
    ...styles,
    zIndex: 1000,
  }),
};

const tooltipArrowSize = 8;
export const TOOLTIP = createGlobalStyle`
  .tippy-box {
    padding: 4px ${GAP.s};
    color: ${COLOR.light};
    background-color: ${COLOR.gray1};
    box-shadow: ${SHADOW.xs};
    border-radius: ${RADIUS.s};
    z-index: 1;
  }
  .tippy-box[data-placement^="top"] > .tippy-arrow {
      bottom: 0;
  }
  .tippy-box[data-placement^="top"] > .tippy-arrow::before {
      bottom: -7px;
      left: 0;
      border-width: ${tooltipArrowSize}px ${tooltipArrowSize}px 0;
      border-top-color: initial;
      transform-origin: center top;
  }
  .tippy-box[data-placement^="bottom"] > .tippy-arrow {
      top: 0;
  }
  .tippy-box[data-placement^="bottom"] > .tippy-arrow::before {
      top: -7px;
      left: 0;
      border-width: 0 ${tooltipArrowSize}px ${tooltipArrowSize}px;
      border-bottom-color: initial;
      transform-origin: center bottom;
  }
  .tippy-box[data-placement^="left"] > .tippy-arrow {
      right: 0;
  }
  .tippy-box[data-placement^="left"] > .tippy-arrow::before {
      border-width: ${tooltipArrowSize}px 0 ${tooltipArrowSize}px ${tooltipArrowSize}px;
      border-left-color: initial;
      right: -7px;
      transform-origin: center left;
  }
  .tippy-box[data-placement^="right"] > .tippy-arrow {
      left: 0;
  }
  .tippy-box[data-placement^="right"] > .tippy-arrow::before {
      left: -7px;
      border-width: ${tooltipArrowSize}px ${tooltipArrowSize}px ${tooltipArrowSize}px 0;
      border-right-color: initial;
      transform-origin: center right;
  }
  .tippy-box[data-inertia][data-state="visible"] {
      transition-timing-function: cubic-bezier(0.54, 1.5, 0.38, 1.11);
  }
  .tippy-arrow {
      width: ${tooltipArrowSize * 2}px;
      height: ${tooltipArrowSize * 2}px;
      color: ${COLOR.gray1};
  }
  .tippy-arrow::before {
      content: "";
      position: absolute;
      border-color: transparent;
      border-style: solid;
  }
`;

export const NOTIFICATION: CSSPropertiesExtended = {
  ...TYPOGRAPHY.b2m,
  width: '100%',
  display: 'inline-block',
  padding: '12px 18px',
  background: COLOR.gray1,
  sizing: 'border-box',
};
export const NOTIFICATION_VARIANTS: Record<
  NotificationVariant,
  CSSPropertiesExtended
> = {
  info: {
    background: COLOR.brandLightest,
    '.info-icon': {
      display: 'flex',
      svg: {
        path: {
          fill: `${COLOR.brandMain} !important`,
        },
      },
    },
  },
  danger: {
    background: COLOR.danger3,
    '.info-icon': {
      display: 'flex',
      svg: {
        path: {
          fill: `${COLOR.danger2} !important`,
        },
      },
    },
  },
  warning: {
    background: COLOR.warning3,
    '.info-icon': {
      display: 'flex',
      svg: {
        path: {
          fill: `${COLOR.warning2} !important`,
        },
      },
    },
  },
  success: {
    background: COLOR.success3,
    '.info-icon': {
      display: 'flex',
      svg: {
        path: {
          fill: `${COLOR.brandMain} !important`,
        },
      },
    },
  },
};

export const INFOBOX: Record<InfoBoxSize, CSSPropertiesExtended> = {
  default: {
    minWidth: '240px',
    display: 'inline-block',
    padding: GAP.s,
    border: `2px solid ${COLOR.gray5}`,
    background: COLOR.gray6,
    sizing: 'border-box',
    borderRadius: RADIUS.l,
    fontSize: '14px',
    fontWeight: 400,
    a: { color: COLOR.brandMain },
  },
  small: {
    minWidth: '240px',
    display: 'inline-block',
    padding: GAP.s,
    border: `2px solid ${COLOR.gray5}`,
    background: COLOR.gray6,
    sizing: 'border-box',
    borderRadius: RADIUS.l,
    fontSize: '14px',
    fontWeight: 400,
    a: { color: COLOR.brandMain },
  },
  compact: {
    minWidth: '240px',
    display: 'inline-block',
    padding: `0 ${GAP.xs}`,
    borderLeft: `2px solid ${COLOR.brandMain}`,
    fontSize: '14px',
    fontWeight: 400,
    a: { color: COLOR.brandMain },
  },
};
export const INFOBOX_COMPACT_BORDER: Record<
  InfoBoxVariant,
  CSSPropertiesExtended
> = {
  default: {
    borderLeft: `2px solid ${COLOR.brandMain}`,
  },
  danger: {
    borderLeft: `2px solid ${COLOR.danger2}`,
  },
  warning: {
    borderLeft: `2px solid ${COLOR.warning2}`,
  },
  special: {
    borderLeft: `2px solid ${COLOR.brandMain}`,
  },
};
export const INFOBOXTITLE: Record<InfoBoxVariant, CSSPropertiesExtended> = {
  default: {
    '.info-icon': {
      display: 'flex',
      svg: {
        path: {
          fill: `${COLOR.brandMain} !important`,
        },
      },
    },
    color: COLOR.brandDark,
  },
  danger: {
    '.info-icon': {
      display: 'flex',
      svg: {
        path: {
          fill: `${COLOR.danger2} !important`,
        },
      },
    },
    color: COLOR.danger,
  },
  warning: {
    '.info-icon': {
      display: 'flex',
      svg: {
        path: {
          fill: `${COLOR.warning2} !important`,
        },
      },
    },
    color: COLOR.warning,
  },
  special: {
    '.info-icon': {
      display: 'flex',
      svg: {
        path: {
          fill: `${COLOR.brandMain} !important`,
        },
      },
    },
    color: COLOR.gray1,
  },
};

export const PROFILE_PICTURE: CSSPropertiesExtended = {
  borderRadius: '100px',
  background: COLOR.brandLightest,
  backgroundSize: 'contain',
};
export const SELECT_CARD: CSSPropertiesExtended = {
  padding: '16px',
  border: `1px solid ${COLOR.gray4}`,
  borderRadius: RADIUS.xl,
  cursor: 'pointer',
  '&:hover': {
    border: `1px solid ${COLOR.gray1}`,
  },
  '&:active': {
    border: `1px solid ${COLOR.brandMain}`,
  },
};

export const SIDE_PANEL: CSSPropertiesExtended = {
  parent: {
    width: '56px',
    alignItems: 'center',
    transition: 'all 0.2s ease-in-out',
    '&:hover': {
      width: '240px',
      '.item-text': {
        width: 'fit-content'
      },
    }
  },
  item: {
    alignItems: 'center',
    height: '48px',
    width: '100%',
    padding: '15px 19px',
    borderRadius: '8px',
    cursor: 'pointer',
    whiteSpace: 'nowrap',
    '&:hover': {
      background: COLOR.brandLightest
    },
    '.item-text': {
      width: '0px',
      overflow: 'hidden',
    },
    svg: {
      minWidth: '18px'
    }
  }
};

export const CHIPS: Record<ChipsVariant, CSSPropertiesExtended> = {
  default: {
    ...TYPOGRAPHY.b2m,
    padding: GAP.xs,
    borderRadius: '100px',
    width: 'fit-content',
    justifyContent: 'center',
    alignItems: 'center',
    '&:hover': {
      background: COLOR.gray5,
    },
    '&:active': {
      background: COLOR.gray5,
    },
    '.number': {
      ...TYPOGRAPHY.b3m,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: '2px',
      width: '20px',
      height: '20px',
      background: COLOR.gray4,
      color: COLOR.gray1,
      borderRadius: '100px',
    },
  },
};

export const DRAWER: Record<DrawerVariant, CSSPropertiesExtended> = {
  basic: {
    margin: 0,
    padding: GAP.l,
    width: 500,
    backgroundColor: COLOR.light,
    boxShadow: SHADOW.xl,
    transition: 'transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1)',
  },
  raw: {
    margin: 0,
    padding: GAP.l,
    width: 500,
    transition: 'transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1)',
  },
};

export const TABLE: CSSPropertiesExtended = {
  thead: {
    background: COLOR.gray5,
    borderRadius: '8px 0px 0px 0px',
    color: COLOR.gray1,
    th: {
      color: COLOR.gray1,
    },
  },
};

export const TABLE_WRAPPER: CSSPropertiesExtended = {
  '.paginationButtons': {
    button: {
      svg: {
        path: {
          fill: COLOR.gray1,
        },
      },
    },
  },
};

export const CHECKBOX: CSSPropertiesExtended = {
  basic: {
    color: COLOR.gray1,
    fontSize: '16px',

    // the icon color manipulation
    svg: {
      path: {
        fill: `${COLOR.brandMain} !important`,
      },
    },
  },
  labelMargin: {
    margin: '-2px 0 0 10px',
  },
};

export const COLLAPSABLE: Record<BoxVariant & any, CSSPropertiesExtended> = {
  iconVariants: {
    default: {
      iconColor: {
        open: 'brandMain',
        closed: 'gray.3',
      },
      bgColor: {
        open: 'brandLightest',
        closed: 'gray.4',
      },
    },
    transparent: {
      iconColor: {
        open: 'brandMain',
        closed: 'gray.3',
      },
      bgColor: {
        open: 'transparent',
        closed: 'transparent',
      },
    },
  },
  iconColor: {
    isOpen: 'brandMain',
    notOpen: 'gray.3',
  },
  iconBgColor: {
    isOpen: 'brandLightest',
    notOpen: 'gray.4',
  },
  basic: {
    color: COLOR.gray1,
    fontSize: '16px',
    // the icon color manipulation
    // svg: {
    //   path: {
    //     fill: 'red !important',
    //   },
    // },
  },
};
