import styled from 'styled-components';
import { getMargin } from '../../theme/utils';
import { TextVariant } from './types';

export const Component = styled.span<TextVariant & any>(
  ({ variant, format, margin, color, altColor, display, theme }) => ({
    ...(theme.TEXT[variant] || {}),
    ...(format && (theme.TYPOGRAPHY[format] || {})),
    margin: getMargin({ theme, margin }),
    ...(color && { color: theme.COLOR[color] }),
    ...(altColor ? { span: { color: theme.COLOR[altColor] } } : {}),
    ...(display && { display }),
  })
);
