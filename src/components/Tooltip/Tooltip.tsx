import { FC, useContext, ComponentType } from 'react';
import { ThemeContext } from 'styled-components';
import Tippy, { TippyProps } from '@tippyjs/react';
import 'tippy.js/animations/shift-away-subtle.css'; // eslint-disable-line import/no-extraneous-dependencies
import 'tippy.js/dist/tippy.css'; // eslint-disable-line import/no-extraneous-dependencies

import { polyIcons } from '../../themeSettings';
import { Icon } from '../Icon';

export type TooltipVariant = 'basic' | 'icon';

export type TooltipProps = TippyProps & {
  variant: TooltipVariant;
  children?: any;
  icon?: ComponentType;
  size?: string;
  color?: string | undefined;
  onHover?: () => void;
};

export const Tooltip: FC<TooltipProps> = ({
  variant,
  icon = polyIcons.InformationOutline,
  color = 'brandMain',
  size = '16px',
  animation = 'shift-away-subtle',
  children,
  onHover,
  ...props
}) => {
  const currentTheme = useContext(ThemeContext);

  return (
    <>
      <currentTheme.TOOLTIP />
      <Tippy animation={animation} {...props}>
        <span onMouseEnter={onHover}>
          {variant === 'icon' ? (
            <Icon variant="basic" icon={icon} size={size} color={color} />
          ) : (
            children
          )}
        </span>
      </Tippy>
    </>
  );
};
