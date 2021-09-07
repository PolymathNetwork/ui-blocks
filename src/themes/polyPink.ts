import { polyTheme } from '../index';

const brandmain = '#ec4673';

export const pinkTheme: any = {
  ...polyTheme,
  TYPOGRAPHY: {
    ...polyTheme.TYPOGRAPHY,
    h4: {
      ...polyTheme.TYPOGRAPHY.h4,
      fontWeight: '600',
    },
  },
  COLOR: {
    ...polyTheme.COLOR,
    brandMain: brandmain,
    gray8: '#F8F9FC',
  },
  BUTTON: {
    ...polyTheme.BUTTON,
    primary: {
      ...polyTheme.BUTTON.primary,
    },
  },
  BADGE: {
    ...polyTheme.BADGE,
    basic: {
      ...polyTheme.TYPOGRAPHY.b3m,
      color: brandmain,
      backgroundColor: polyTheme.COLOR.light,
      borderRadius: '100px',
      fontSize: '13px !important',
      border: `1px solid ${brandmain}`,
    },
  },
};