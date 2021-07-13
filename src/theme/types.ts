import { CSSProperties } from 'react';

export type CSSPropertiesExtended = CSSProperties & Record<string, any>;

export type Gap = 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl' | 'xxxl';

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
