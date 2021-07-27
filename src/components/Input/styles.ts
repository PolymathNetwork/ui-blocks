import styled from 'styled-components';

import { getMargin } from '../../theme/utils';
import { Grid } from '../Grid';
import { InputWrapperProps } from './types';

export const InputWrapper = styled(Grid)<InputWrapperProps>(
  ({ theme, error, disabled }) => ({
    backgroundColor: (theme.INPUT || { backgroundColor: 'unset' })
      .backgroundColor,
    padding: (theme.INPUT || { padding: 0 }).padding,
    border: (theme.INPUT || { border: 0 }).border,
    borderRadius: (theme.INPUT || { borderRadius: 0 }).borderRadius,
    transition: (theme.INPUT || { transition: 'unset' }).transition,
    ...(error ? { borderColor: theme.COLOR.danger } : {}),
    ...(theme.INPUT && theme.INPUT['&:focus']
      ? { '&:focus-within': theme.INPUT['&:focus'] }
      : {}),
    ...(disabled && theme.INPUT && theme.INPUT['&:disabled']
      ? theme.INPUT['&:disabled']
      : {}),
  }),
);

export const Component = styled.input(({ theme }) => ({
  ...(theme.INPUT || {}),
  margin: 0,
  padding: 0,
  border: 0,
  borderRadius: 0,
  borderColor: 'transparent',
  WebkitAppearance: 'none',
  outline: 'none',
}));

export const Unit = styled.div(({ theme }) => ({
  margin: getMargin({ theme, margin: '0 0 0 s' }),
  padding: 0,
  color: theme.COLOR.gray3,
}));
