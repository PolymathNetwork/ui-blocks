export type BadgeVariant = 'basic' | 'success' | 'warning' | 'danger';

export type BadgeProps = {
  variant: BadgeVariant;
  margin?: string;
  display?: Display;
  size?: 's' | 'm';
};
