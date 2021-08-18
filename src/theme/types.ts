import { CSSProperties } from 'react';

export type CSSPropertiesExtended = CSSProperties & Record<string, any>;

export type Display = 'block' | 'inline-block' | 'inline' | 'none' | 'inherit';

export type Justify = 'spaced' | 'center' | 'start' | 'end';

export type Align = 'center' | 'start' | 'end';

export type Shadow = 'xs' | 's' | 'm' | 'l' | 'xl';

export type Radius = 's' | 'm' | 'l' | 'xl';

export type TextFormat =
  | 'b1m'
  | 'b1'
  | 'b2m'
  | 'b2'
  | 'b3m'
  | 'b3'
  | 'c1'
  | 'c2'
  | 'btn'
  | 'tn'
  | 'code';

export const propValueMap: Record<string, string> = {
  spaced: 'space-between',
  start: 'flex-start',
  end: 'flex-end',
};

export type OptionType = {
  value: string;
  label: string;
};

export type Gap = 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl' | 'xxxl';
