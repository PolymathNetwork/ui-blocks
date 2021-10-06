import React from 'react';
import * as sc from './styles';
import { LoadingProps } from './types';
import { Box } from '../Box';

const LoadingDefault = (props: LoadingProps) => (
  <sc.Loading {...props}>
    <span />
    <span />
    <span />
  </sc.Loading>
);

const LoadingScreen = (props: LoadingProps) => (
  <sc.Backdrop>
    <sc.Wrapper variant="raw" padding="l 0 0 0">
      <sc.Loading {...props}>
        <span />
        <span />
      </sc.Loading>
      {props.details && (
        <Box variant="raw" bg="gray.1" margin="l 0 0 0">
          {props.details}
        </Box>
      )}
    </sc.Wrapper>
  </sc.Backdrop>
);

const LoadingDots = (props: LoadingProps) => (
  <sc.LoadingDots {...props}>
    <span />
    <span />
    <span />
  </sc.LoadingDots>
);

const LoadingDotsOutlined = (props: LoadingProps) => (
  <sc.LoadingDotsOutlined {...props}>
    <span />
    <span />
    <span />
  </sc.LoadingDotsOutlined>
);

export const Loading = (props: LoadingProps) => {
  const { variant } = props;
  if (variant === 'default') return <LoadingDefault {...props} />
  else if (variant === 'dots') return <LoadingDots {...props} />
  else if (variant === 'outlined') return <LoadingDotsOutlined {...props} />
  else if (variant === 'screen') return <LoadingScreen {...props} />
  else return <></>
};
