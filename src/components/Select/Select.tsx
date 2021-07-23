import { FC, ComponentType, useContext } from 'react';
import { ThemeContext } from 'styled-components';
import ReactSelect, {
  components,
  OptionsType,
  GroupedOptionsType,
} from 'react-select';

import { polyIcons } from '../../theme';
import { OptionType } from '../../theme/types';
import { Icon } from '../Icon';
import { Flex } from '../Flex';
import { Text } from '../Text';

export type SelectVariant = 'basic';

export type SelectProps = {
  variant: SelectVariant;
  margin?: string;
  id?: string;
  name?: string;
  label?: string;
  tooltip?: string | ComponentType;
  disabled?: boolean;
  noIcon?: boolean;
  inputRef?: any;
  onChange?: (value: any) => void;
  placeholder?: string;
  value?: OptionType;
  options: OptionsType<OptionType> | GroupedOptionsType<OptionType>;
  // disabledOptionText?: string;
};

export const Select: FC<SelectProps> = ({
  margin,
  id,
  label,
  tooltip,
  inputRef,
  onChange,
  noIcon,
  ...props
}) => {
  const currentTheme = useContext(ThemeContext);

  const handleChange = (e?: OptionType | OptionType[] | null) => {
    if (onChange) {
      if (!e) {
        onChange(null);
      } else {
        const result = Array.isArray(e)
          ? e.map((option) => option.value)
          : e.value;
        onChange(result);
      }
    }
  };

  const Option: FC<any> = ({ children, ...oProps }) => {
    return (
      <components.Option {...oProps}>
        {!noIcon && (
          <Icon
            variant="basic"
            icon={polyIcons.Image}
            size="22px"
            color="gray3"
            margin="0 s -5px l"
          />
        )}
        {children}
        {/* {oProps.isDisabled && oProps.selectProps.disabledOptionText && (
          <Tooltip>{oProps.selectProps.disabledOptionText}</Tooltip>
        )} */}
      </components.Option>
    );
  };

  const DropdownIndicator: FC<any> = (iProps) => {
    return (
      components.DropdownIndicator && (
        <components.DropdownIndicator {...iProps}>
          <Icon
            variant="basic"
            icon={polyIcons.ChevronDown}
            size="24px"
            color="gray3"
          />
        </components.DropdownIndicator>
      )
    );
  };

  return (
    <Text variant="label" display="block" margin={margin}>
      {label && tooltip && (
        <Flex variant="raw" justify={tooltip ? 'spaced' : 'start'}>
          <Text variant="span" format="b2m">
            {label}
          </Text>
          {tooltip && (
            // TODO: Pass `tooltip` as content to Tooltip component
            <img
              title={tooltip as string}
              src="https://upload.wikimedia.org/wikipedia/commons/5/5f/OOjs_UI_icon_info-progressive.svg"
              width="18px"
              height="18px"
            />
          )}
        </Flex>
      )}
      <ReactSelect
        inputId={id}
        ref={inputRef}
        inputRef={inputRef}
        innerRef={inputRef}
        styles={currentTheme.SELECT}
        components={{
          Option,
          DropdownIndicator,
          IndicatorSeparator: null,
          ClearIndicator: null,
        }}
        onChange={handleChange}
        menuPlacement="auto"
        menuPortalTarget={document.body}
        backspaceRemovesValue={false}
        {...props}
      />
    </Text>
  );
};
