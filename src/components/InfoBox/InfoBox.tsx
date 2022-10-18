import { FC, useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from 'styled-components';
import { getMargin } from '../../theme/utils';
import { polyIcons } from '../../theme/icons';
import { Icon } from '../Icon';
import { Text } from '../Text/Text';
import { Flex } from '../Flex';
import { Box } from '../Box';

export type InfoBoxSize = 'default' | 'compact' | 'small';
export type InfoBoxVariant = 'default' | 'danger' | 'warning' | 'special';

export type InfoBoxProps = {
  size: InfoBoxSize;
  variant: InfoBoxVariant;
  margin?: string;
  title: string;
  important?: boolean;
  color?: string;
  isClosable?: boolean,
  onClose?: () => void,
  text: string;
};

const IconContainer = styled.span(() => ({
  display: 'flex',
  alignItems: 'center',
  svg: { padding: '0 !important' },
}));

const CloseIcon = styled(Icon)(() => ({
  cursor: 'pointer'
}));

const renderCloseIcon = (onClose?: () => void) => (
  <div onClick={onClose}>
    <CloseIcon
      size="10px"
      color="gray3"
      icon={polyIcons.Close}
      variant="basic"
      margin="0"
    />
  </div>
)

const Component = styled.div<Pick<InfoBoxProps, 'size' | 'margin' | 'variant'>>(
  ({ size, margin, variant, theme }) => ({
    ...(theme.INFOBOX[size] || {}),
    ...(size == 'compact' && (theme.INFOBOX_COMPACT_BORDER[variant] || {})),
    ...(theme.INFOBOXTITLE[variant]),
    margin: getMargin({ theme, margin }),
  }),
);

const Title = ({
  title,
  important,
  variant,
}: {
  title: string;
  important: boolean | undefined;
  color: string | undefined;
  variant: string;
}) => {
  const currentTheme = useContext(ThemeContext);
  return (
    <IconContainer>
      <div className="info-icon" >
        <Icon
          icon={polyIcons.InformationOutline}
          variant="circle"
          size="20px"
          margin="0 10px 0 -2px"
          bg="light"
        />
      </div>
      <Text color={currentTheme.INFOBOXTITLE[variant].color} as="span" variant={variant === 'special' ? 'b1m' : "b2m"}>
        {important ? title.toUpperCase() : title}
      </Text>
    </IconContainer>
  );
};

const DefaultVariant: FC<InfoBoxProps> = ({variant, title, important, color, isClosable, onClose, text, children, ...props}) => {
  return (
    <Component variant={variant} {...props}>
      <Flex justify="spaced" align="center" variant="raw">
        <Title variant={variant} title={title} important={important} color={color} />
        {isClosable && renderCloseIcon(onClose)}
      </Flex>
      <Text margin="10px 0 0" color="gray2" as="p" variant="b2">{text}</Text>
      {children && (
        <Box variant="raw" margin="8px 0 0" >
          {children}
        </Box>
      )}
    </Component>
  )
}

const SmallVariant: FC<InfoBoxProps> = ({variant, title, important, color, isClosable, onClose, text, children, ...props}) => {
  return (
    <Component variant={variant} {...props}>
      <Flex justify="spaced" align="center" variant="raw">
        <Title variant={variant} title={title} important={important} color={color} />
        <Text margin="0" padding="0 10px" color="gray2" as="p" variant="b2">{text}</Text>
        {isClosable && renderCloseIcon(onClose)}
      </Flex>
      {children && (
        <Box variant="raw" margin="8px 0 0" >
          {children}
        </Box>
      )}
    </Component>
  )
}

export const InfoBox: FC<InfoBoxProps> = ({
  title,
  important,
  color,
  children,
  variant = 'default',
  size = 'default',
  text,
  isClosable = false,
  onClose = () => {},
  ...props
}) => {
  return (
    size === 'small' ?
      <SmallVariant
        size={size}
        variant={variant}
        title={title}
        important={important}
        color={color}
        isClosable={isClosable}
        onClose={onClose}
        text={text}
        children={children}
        {...props}
      /> :
      <DefaultVariant
        size={size}
        variant={variant}
        title={title}
        important={important}
        color={color}
        isClosable={isClosable}
        onClose={onClose}
        text={text}
        children={children}
        {...props}
      />
  );
};
