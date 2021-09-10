import { FC } from 'react';
import styled from 'styled-components';

import { getMargin } from '../../theme/utils';
import { polyIcons } from '../../theme/icons';
import { Icon } from '../Icon';
import { Text } from '../Text/Text';

export type InfoBoxVariant = 'basic' | 'compact';

export type InfoBoxProps = {
  variant: InfoBoxVariant;
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

const Component = styled.div<Pick<InfoBoxProps, 'variant' | 'margin'>>(
  ({ variant, margin, theme }) => ({
    ...(theme.INFOBOX[variant] || {}),
    margin: getMargin({ theme, margin }),
  }),
);

const TitleText: any = styled(Text)`
  font-size: 14px !important;
  font-weight: 500 !important;
`;

const Title = ({
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
        icon={polyIcons.InformationOutline}
        variant="circle"
        size="20px"
        margin="0 10px 0 2px"
        color={color || 'brandMain'}
        bg="light"
      />
      <TitleText as="span" variant="b2m" color={getColor()}>
        {important ? title.toUpperCase() : title}
      </TitleText>
    </IconContainer>
  );
};

export const InfoBox: FC<InfoBoxProps> = ({
  title,
  important,
  color,
  children,
  ...props
}) => {
  return (
    <Component {...props}>
      <Title title={title} important={important} color={color} />
      {children}
    </Component>
  );
};
