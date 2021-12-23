export type LoaderVariant = 'basic' | 'dots' | 'outlined' | 'screen';

export type LoaderProps = {
  variant: LoaderVariant;
  small?: boolean;
  details?: string;
};
