import { useContext, ComponentType } from 'react';
import { ThemeContext } from 'styled-components';
import Tippy, { TippyProps } from '@tippyjs/react';
import 'tippy.js/animations/shift-away-subtle.css'; // eslint-disable-line import/no-extraneous-dependencies
import 'tippy.js/dist/tippy.css'; // eslint-disable-line import/no-extraneous-dependencies

import { polyIcons } from '../../theme';
import { Icon } from '../Icon';

export type TooltipVariant = 'basic' | 'icon';

export type TooltipProps = TippyProps & {
  variant: TooltipVariant;
  icon?: ComponentType;
  size?: string;
  color?: string | undefined;
  onHover?: () => void;
  children?: any;
};

export const Tooltip = ({
  variant,
  icon = polyIcons.InformationOutline,
  color = 'brandMain',
  size = '16px',
  animation = 'shift-away-subtle',
  children,
  onHover,
  ...props
}: TooltipProps) => {
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
