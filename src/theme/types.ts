import { CSSProperties } from 'react';

export type Gap = 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl' | 'xxxl';

export type CSSPropertiesExtended = CSSProperties & Record<string, any>;
