import { FC } from 'react';
import styled from 'styled-components';

import { getMargin } from '../../theme/utils';

export type LinkVariant = 'anchor' | 'button';

export type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: LinkVariant;
  color?: string;
  margin?: string;
  href?: string;
  as?: string;
};

const urlRegex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{2,63}\b([-a-zA-Z0-9()@:%_+.~#?&=]*)/;

const linkProps = (href: string | undefined) =>
  href &&
  href.match(urlRegex) && {
    target: '_blank',
    rel: 'noopener noreferrer',
  };

const Anchor = ({ href, ...props }: LinkProps) => (
  <a href={href} {...linkProps(href)} {...props} />
);

export const Link: FC<LinkProps> = ({
  variant = 'anchor',
  color,
  margin,
  ...props
}) => {
  const Component: FC = styled(Anchor)(({ theme }) => ({
    ...(theme.LINK[variant] || {}),
    ...(margin && { margin: getMargin({ theme, margin }) }),
    ...(color && { color: theme.COLOR[color] }),
  }));

  return (
    <Component {...(variant === 'button' && { as: 'button' })} {...props} />
  );
};
