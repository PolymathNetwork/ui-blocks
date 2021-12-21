import * as sc from './styles';
import { LoaderProps } from './types';
import { Box } from '../Box';

const LoadingDefault = (props: LoaderProps) => (
  <sc.Loader {...props}>
    <span />
    <span />
    <span />
  </sc.Loader>
);

const LoadingScreen = ({ details, ...props }: LoaderProps) => (
  <sc.Backdrop>
    <sc.Wrapper variant="raw" padding="l 0 0 0">
      <sc.Loader {...props}>
        <span />
        <span />
      </sc.Loader>
      {details && (
        <Box variant="raw" bg="gray.1" margin="l 0 0 0">
          {details}
        </Box>
      )}
    </sc.Wrapper>
  </sc.Backdrop>
);

const LoadingDots = (props: LoaderProps) => (
  <sc.LoadingDots {...props}>
    <span />
    <span />
    <span />
  </sc.LoadingDots>
);

const LoadingDotsOutlined = (props: LoaderProps) => (
  <sc.LoadingDotsOutlined {...props}>
    <span />
    <span />
    <span />
  </sc.LoadingDotsOutlined>
);

export const Loader = (props: LoaderProps) => {
  const { variant } = props;
  if (variant === 'default') return <LoadingDefault {...props} />;
  else if (variant === 'dots') return <LoadingDots {...props} />;
  else if (variant === 'outlined') return <LoadingDotsOutlined {...props} />;
  else if (variant === 'screen') return <LoadingScreen {...props} />;
  else return <></>;
};
