import { ComponentType, FC } from 'react';
import styled from 'styled-components';
import { getMargin } from '../../theme/utils';
import { polyIcons } from '../../theme/icons';
import { Icon } from '../Icon';
import { Text } from '../Text/Text';
import { Flex } from '../Flex';
import { Box } from '../Box';

export type NotificationVariant = 'info' | 'danger' | 'warning' | 'success';

const VARIANT_ICONS: Record<NotificationVariant, ComponentType> = {
  info: polyIcons.InformationOutline,
  danger: polyIcons.AlertCircleOutline,
  warning: polyIcons.InformationOutline,
  success: polyIcons.CheckCircleOutline,
};

export type NotificationProps = {
  variant: NotificationVariant;
  margin?: string;
  title: string;
  important?: boolean;
  color?: string;
  isClosable?: boolean;
  onClose?: () => void;
  text: string;
};

const IconContainer = styled.span(() => ({
  display: 'flex',
  alignItems: 'center',
  svg: { padding: '0 !important' },
}));

const CloseIcon = styled(Icon)(() => ({
  cursor: 'pointer',
}));

const renderCloseIcon = (onClose?: () => void) => (
  <div role="button" tabIndex={0} onClick={onClose}>
    <CloseIcon
      size="10px"
      color="gray3"
      icon={polyIcons.Close}
      variant="basic"
      margin="0"
    />
  </div>
);

const Component = styled.div<Pick<NotificationProps, 'margin' | 'variant'>>(
  ({ margin, variant, theme }) => ({
    ...(theme.NOTIFICATION || {}),
    ...theme.NOTIFICATION_VARIANTS[variant],
    margin: getMargin({ theme, margin }),
  }),
);

export const Notification: FC<NotificationProps> = ({
  color,
  children,
  variant = 'info',
  text,
  isClosable = false,
  onClose = () => {},
  ...props
}) => {
  return (
    <Component variant={variant} {...props}>
      <Flex justify="spaced" align="center" variant="raw">
        <Flex variant="raw">
          <IconContainer>
            <div className="info-icon">
              <Icon
                icon={VARIANT_ICONS[variant]}
                variant="circle"
                size="20px"
                bg="light"
              />
            </div>
          </IconContainer>
          <Text
            margin="0"
            padding="4px 10px"
            color="gray1"
            as="p"
            variant="b2m"
          >
            {text}
          </Text>
          {children && (
            <Box variant="raw" margin="0 8px 0">
              {children}
            </Box>
          )}
        </Flex>
        {isClosable && renderCloseIcon(onClose)}
      </Flex>
    </Component>
  );
};
