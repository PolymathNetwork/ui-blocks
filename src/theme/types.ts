import { CSSProperties, ReactNode } from 'react';

export type CSSPropertiesExtended = CSSProperties & Record<string, any>;

export type Display = 'block' | 'inline-block' | 'inline' | 'none';

export type Justify = 'spaced' | 'center' | 'start' | 'end';

export type Align = 'center' | 'start' | 'end';

export type Shadow = 'xs' | 's' | 'm' | 'l' | 'xl';

export type Radius = 's' | 'm' | 'l' | 'xl';

export const propValueMap: Record<string, string> = {
  spaced: 'space-between',
  start: 'flex-start',
  end: 'flex-end',
};

export type OptionType = {
  value: string;
  label: string;
  icon?: ReactNode;
};

export type Gap = 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl' | 'xxxl';
