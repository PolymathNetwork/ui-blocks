import { FC } from 'react';
import styled from 'styled-components';
import { Flex } from '../Flex';
import { polyIcons } from '../../theme/icons';
import { Icon } from '../Icon';

export type ProfilePictureVariant = 'text' | 'icon' | 'image';

export type ProfilePictureProps = {
  text?: string;
  image?: string;
  variant?: ProfilePictureVariant;
  size?: 's' | 'm' | 'l';
};

const iconSizeMap: Record<string, string> = {
  s: '16px',
  m: '26px',
  l: '36px',
};

const textSizeMap: Record<string, Record<string, string>> = {
  s: {
    fontWeight: '500',
    fontSize: '14px',
    lineHeight: '24px',
  },
  m: {
    fontWeight: '500',
    fontSize: '24px',
    lineHeight: '32px',
  },
  l: {
    fontWeight: '500',
    fontSize: '34px',
    lineHeight: '44px',
  },
};

const ComponentSizeMap: Record<string, Record<string, string>> = {
  s: {
    width: '40px',
    height: '40px',
  },
  m: {
    width: '88px',
    height: '88px',
  },
  l: {
    width: '128px',
    height: '128px',
  },
};

const Component = styled(Flex)<any>(({ theme, size, variant, image }) => ({
  ...ComponentSizeMap[size],
  ...theme.PROFILE_PICTURE,
  ...(variant === 'image' && { backgroundImage: `url(${image})` }),
}));

const StyledText = styled.p<any>(({ size }) => ({
  ...textSizeMap[size],
}));

const renderChildren = (
  variant: string,
  text: string | undefined,
  size: string,
) => {
  if (variant === 'icon') {
    return (
      <Icon
        size={iconSizeMap[size]}
        color="brandDarkest"
        icon={polyIcons.Account}
        variant="basic"
        margin="0"
      />
    );
  } else if (variant === 'text') {
    return <StyledText size={size}>{text}</StyledText>;
  } else if (variant === 'image') {
    return <StyledText size={size}>{text}</StyledText>;
  }
};

export const ProfilePicture: FC<ProfilePictureProps> = (props) => {
  const { text, variant = 'icon', size = 'm', image } = props;
  return (
    <Component
      size={size}
      image={image}
      variant={variant}
      align="center"
      justify="center"
      {...props}
    >
      {renderChildren(variant, text, size)}
    </Component>
  );
};
