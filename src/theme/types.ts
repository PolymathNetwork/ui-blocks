import { CSSProperties } from 'react';

export type CSSPropertiesExtended = CSSProperties & Record<string, any>;

export type Gap = 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl' | 'xxxl';
