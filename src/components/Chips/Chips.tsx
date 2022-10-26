import { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { Flex } from '../Flex';

export type ChipsVariant = 'default';

export type ChipsProps = PropsWithChildren<{
  text: string;
  number: number;
  variant: 'default';
}>;

const Component = styled(Flex)<any>(({ theme, variant }) => ({
  ...(theme.CHIPS[variant] || {}),
}));

export function Chips(chipsProps: ChipsProps) {
  const { text, number, ...props } = chipsProps;

  return (
    <Component {...props}>
      {text}
      <div className="number">{number}</div>
    </Component>
  );
}
