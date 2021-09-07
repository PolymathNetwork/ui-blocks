import { FC } from 'react';
import styled from 'styled-components';

import { getMargin } from '../../themeSettings/utils';

export type HeadingVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export type HeadingProps = {
  variant: HeadingVariant;
  margin?: string;
  color?: string;
  altColor?: string;
};

const Component = styled.h1<HeadingProps>(
  ({ theme, color, altColor, margin, variant }) => ({
    ...(theme.TYPOGRAPHY[variant] || {}),
    margin: getMargin({ theme, margin }),
    ...(color ? { color: theme.COLOR[color] } : {}),
    ...(altColor ? { span: { color: theme.COLOR[altColor] } } : {}),
  }),
);

export const Heading: FC<HeadingProps> = (props) => <Component {...props} />;
