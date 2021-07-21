import { CSSProperties } from 'react';

export type CSSPropertiesExtended = CSSProperties & Record<string, any>;

export type IconType = (props: any) => JSX.Element;

export type Justify = 'spaced' | 'center' | 'start' | 'end';

export type Align = 'center' | 'start' | 'end';

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
