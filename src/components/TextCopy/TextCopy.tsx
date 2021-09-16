import { FC, useState, Fragment } from 'react';
import styled from 'styled-components';
import CopyToClipboard from 'react-copy-to-clipboard';

import { Flex, FlexProps } from '../Flex';
import { Box, BoxProps } from '../Box';
import { Text, TextVariant } from '../Text';
import { Link } from '../Link';
import { Icon, IconProps } from '../Icon';
import { polyIcons } from '../../theme';

export type TextCopyVariant = TextVariant;

export type TextCopyProps = Omit<FlexProps, 'variant'> & {
  variant: TextCopyVariant;
  value: string;
  children: string;
  trim?: boolean | number;
  link?: string;
  icon?: boolean;
  buttonProps?: { copyId?: string; linkId?: string };
};

const CopyButton = styled(CopyToClipboard)`
  cursor: pointer;
`;

type CopyIconProps = { copied: boolean } & IconProps;

const CopyTooltip = (copied: boolean) => `
  position: relative;

  &::after {
    content: 'Copied';
    position: absolute;
    bottom: -25px;
    left: 50%;
    transform: translateX(-50%);
    margin: 0;
    padding: 5px;
    background-color: rgba(0, 0, 0, 0.7);
    color: #ffffff;
    border-radius: 8px;
    font-size: 9px;
    font-weight: bold;
    pointer-events: none;
    opacity: ${copied ? 1 : 0};
    transition: opacity 0.3s;
  }
`;

const CopyIcon = styled(Icon)<CopyIconProps>((props) =>
  CopyTooltip(props.copied),
);

const TextWrapper = styled(Box)<BoxProps & { copied?: boolean }>((props) =>
  CopyTooltip(props.copied || false),
);

const formatString = (string: string, size?: number | boolean) => {
  if (!size) return string;
  const targetSize = size === true ? 25 : size;
  const portionSize = Math.floor((targetSize - 3) / 2);
  const remainder = ((targetSize - 3) / 2) % 1 !== 0 ? 1 : 0;
  if (string.length <= targetSize) return string;
  return `${string.substring(0, portionSize + remainder)}...${string.slice(
    -portionSize,
  )}`;
};

export const TextCopy: FC<TextCopyProps> = ({
  variant,
  value,
  children,
  trim,
  link,
  icon = true,
  buttonProps,
  align = 'center',
  ...props
}) => {
  const [copied, setCopied] = useState(false);
  const gap = 'xs';
  const iconSize = '16px';

  const handleCopyClick = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const InnerWrapper = !icon ? (CopyButton as any) : Fragment;

  return (
    <Flex variant="raw" align={align} {...props}>
      <InnerWrapper {...(!icon ? { text: value } : {})}>
        <TextWrapper
          variant="raw"
          margin={`0 ${gap} 0 0`}
          padding={`0 ${gap}`}
          {...(icon
            ? { bg: 'brandLightest', radius: 'm' }
            : { copied, onClick: handleCopyClick })}
        >
          <Text
            as="span"
            variant={variant}
            {...(icon ? { color: 'brandMain' } : {})}
          >
            {formatString(children, trim)}
          </Text>
        </TextWrapper>
      </InnerWrapper>
      {icon && (
        <CopyButton text={value}>
          <CopyIcon
            variant="basic"
            icon={polyIcons.ContentCopy}
            size={iconSize}
            color="gray2"
            copied={copied}
            {...{ onClick: handleCopyClick }}
            {...(buttonProps && buttonProps.copyId
              ? { id: buttonProps.copyId }
              : {})}
          />
        </CopyButton>
      )}
      {link && (
        <Link
          variant="secondary"
          icon={false}
          href={link}
          target="_blank"
          size="s"
          label={
            <Icon
              variant="basic"
              icon={polyIcons.OpenInNew}
              size={iconSize}
              color="gray2"
              margin={`2px 0 0 ${gap}`}
            />
          }
          {...(buttonProps && buttonProps.linkId
            ? { id: buttonProps.linkId }
            : {})}
        />
      )}
    </Flex>
  );
};
