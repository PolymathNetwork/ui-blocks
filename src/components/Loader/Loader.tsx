import * as sc from './styles';
import { Box } from '../Box';

export type LoaderVariant = 'basic' | 'dots' | 'outlined' | 'screen';

export type LoaderProps = {
  variant: LoaderVariant;
  small?: boolean;
  details?: string;
};

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
  if (variant === 'dots') return <LoadingDots {...props} />;
  if (variant === 'outlined') return <LoadingDotsOutlined {...props} />;
  if (variant === 'screen') return <LoadingScreen {...props} />;
  return <LoadingDefault {...props} />; // basic
};
