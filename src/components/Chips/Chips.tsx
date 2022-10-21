import { FC } from 'react';
import styled from 'styled-components';
import { Flex } from '../Flex';

export type ChipsVariant = 'default';

export type ChipsProps = {
  text: string;
  number: number;
  variant: 'default';
};

const Component = styled(Flex)<any>(({ theme, variant }) => ({
  ...(theme.CHIPS[variant] || {}),
}));

export const Chips: FC<ChipsProps> = (props) => {
  const { text, number } = props;
  return (
    <Component {...props}>
      {text}
      <div className="number">{number}</div>
    </Component>
  );
};
