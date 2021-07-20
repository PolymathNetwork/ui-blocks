import { CSSProperties } from 'react';

export type IconType = (props: any) => JSX.Element;

export type CSSPropertiesExtended = CSSProperties & Record<string, any>;

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
