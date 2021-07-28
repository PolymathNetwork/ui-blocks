import { FC } from 'react';
import styled from 'styled-components';

import { getMargin } from '../../theme/utils';
import { Icon } from '../Icon';
import { Text } from '../Text/Text';

import { InformationOutline } from '../../theme/icons';

export type AttentionBoxVariant = 'basic' | 'compact';

export type AttentionBoxProps = {
  variant: AttentionBoxVariant;
  margin?: string;
  title: string;
  important?: boolean;
  color?: string;
};

const IconContainer = styled.span(() => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: '10px',
  svg: { padding: '0 !important' },
}));

const Component = styled.div<Pick<AttentionBoxProps, 'variant' | 'margin'>>(
  ({ variant, margin, theme }) => ({
    ...(theme.ATTENTIONBOX[variant] || {}),
    margin: getMargin({ theme, margin }),
  }),
);

const Title = styled(Text)`
  font-size: 14px !important;
  font-weight: 500 !important;
`;

const AttentionPhrase = ({
  title,
  important,
  color,
}: {
  title: string;
  important: boolean | undefined;
  color: string | undefined;
}) => {
  const getColor = () => {
    const fallBackColor = 'gray1';
    if (important && color) {
      return color;
    } else if (important) {
      return 'brandMain';
    } else {
      return fallBackColor;
    }
  };

  return (
    <IconContainer>
      <Icon
        icon={InformationOutline}
        variant="circle"
        size="20px"
        margin="0 10px 0 0"
        color={color || 'brandMain'}
        bg="light"
      />
      <Title variant="span" color={getColor()}>
        {important ? title.toUpperCase() : title}
      </Title>
    </IconContainer>
  );
};

export const AttentionBox: FC<AttentionBoxProps> = ({
  title,
  important,
  color,
  children,
  ...props
}) => {
  return (
    <Component {...props}>
      <AttentionPhrase title={title} important={important} color={color} />
      {children}
    </Component>
  );
};