import * as blue from './blue';

const COLOR = {
  light: '#FFFFFF',
  gray1: '#1E1E1E',
  gray2: '#565656',
  gray3: '#727272',
  gray4: '#8F8F8F',
  gray5: '#EBF0F7',
  gray6: '#F8F9FC',
  brandBg: '#FBFBFB',
  brandMain: '#EC4673',
  brandMain2: '#43195B',
  brandMain3: '#170087',
  brandMain4: '#D557EA',
  brandMain5: '#60D3CB',
  brandLighter: '#DCD3FF',
  brandLight: '#FAD1DC',
  brandLight2: '#F2EFFF',
  brandLightest: '#D7F4F2',
  brandDark: '#100255',
  brandDark2: '#100255',
  success: '#00AA5E',
  success2: '#D4F7E7',
  warning: '#EFC100',
  warning2: '#FBF3D0',
  warning3: '#E3A30C',
  danger: '#DB2C3E',
  danger2: '#FAE6E8',
  teal800: '#00AA5E',
  teal100: '#D4F7E7',
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

const CHECKBOX: any = {
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

const BADGE: any = {
  basic: {
    ...blue.TYPOGRAPHY.b3m,
    color: COLOR.brandMain,
    backgroundColor: COLOR.brandLightest,
    borderRadius: '100px',
  },
  success: {
    ...blue.TYPOGRAPHY.b3m,
    color: COLOR.success,
    backgroundColor: COLOR.success2,
    borderRadius: '100px',
  },
  warning: {
    ...blue.TYPOGRAPHY.b3m,
    color: COLOR.warning,
    backgroundColor: COLOR.warning2,
    borderRadius: '100px',
  },
  danger: {
    ...blue.TYPOGRAPHY.b3m,
    color: COLOR.danger,
    backgroundColor: COLOR.danger2,
    borderRadius: '100px',
  },
};

const COLLAPSABLE: any = {
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

const INFOBOX: any = {
  basic: {
    minWidth: '240px',
    display: 'inline-block',
    padding: blue.GAP.s,
    border: `2px solid #F0F0F0`,
    sizing: 'border-box',
    borderRadius: blue.RADIUS.l,
    fontSize: '14px',
    fontWeight: 400,
    a: { color: COLOR.brandMain },
  },
  compact: {
    minWidth: '240px',
    display: 'inline-block',
    padding: `0 ${blue.GAP.xs}`,
    borderLeft: `2px solid ${COLOR.brandMain}`,
    fontSize: '14px',
    fontWeight: 400,
    a: { color: COLOR.brandMain },
  },
};

export const pink: any = {
  ...blue,
  COLOR: {
    ...blue.COLOR,
    ...COLOR,
  },
  TYPOGRAPHY: {
    ...blue.TYPOGRAPHY,
    font: "'Poppins', sans-serif",
    h4: {
      ...blue.TYPOGRAPHY.h4,
      fontWeight: '600',
    },
  },
  BUTTON: {
    ...blue.BUTTON,
    primary: {
      ...blue.TYPOGRAPHY.btn,
      color: COLOR.light,
      background: COLOR.brandMain3,
      border: 0,
      borderRadius: '100px',
      boxShadow: blue.SHADOW.s,
      transition: 'all 0.3s',
      cursor: 'pointer',
      '&:hover': {
        background: COLOR.brandDark,
      },
      '&:active': {
        background: COLOR.brandDark2,
      },
      '&:disabled': {
        color: COLOR.gray4,
        // Remove me when gray7 is defined in blue (default) theme
        background: blue.COLOR.gray7,
        cursor: 'no-drop',
      },
    },
    secondary: {
      ...blue.TYPOGRAPHY.btn,
      color: COLOR.brandMain3,
      background: COLOR.light,
      border: `1px solid ${COLOR.brandMain3}`,
      borderRadius: '100px',
      transition: 'all 0.3s',
      cursor: 'pointer',
      '&:hover': {
        color: COLOR.brandMain3,
        background: COLOR.brandLight2,
      },
      '&:active': {
        color: COLOR.brandMain3,
        background: COLOR.brandLighter,
      },
      '&:disabled': {
        border: `2px solid #F0F0F0`,
        color: COLOR.gray5,
        background: COLOR.light,
        cursor: 'no-drop',
      },
    },
    tertiary: {
      ...blue.TYPOGRAPHY.btn,
      color: COLOR.gray1,
      background: 'transparent',
      border: 0,
      borderRadius: blue.RADIUS.l,
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
    special: {
      ...blue.TYPOGRAPHY.btn,
      color: COLOR.gray1,
      background: COLOR.light,
      border: 0,
      borderRadius: '100px',
      boxShadow: blue.SHADOW.s,
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
  },
  BADGE: {
    ...blue.BADGE,
    ...BADGE,
  },
  CHECKBOX: {
    ...blue.CHECKBOX,
    ...CHECKBOX,
  },
  COLLAPSABLE: {
    ...blue.COLLAPSABLE,
    ...COLLAPSABLE,
  },
  INFOBOX: {
    ...blue.INFOBOX,
    ...INFOBOX,
  },
};
