import {
  useContext,
  useState,
  useEffect,
  ComponentProps,
  ComponentType,
} from 'react';
import ReactSelect, {
  components,
  OptionsType,
  GroupedOptionsType,
} from 'react-select';
import { ThemeContext } from 'styled-components';

import { OptionType } from '../../theme/types';
import { polyIcons } from '../../theme';
import { Icon } from '../Icon';
import { Flex } from '../Flex';
import { Text } from '../Text';
import { Tooltip } from '../Tooltip';

export type SelectVariant = 'basic';

export type SelectProps = {
  variant: SelectVariant;
  margin?: string;
  id?: string;
  name?: string;
  label?: string;
  tooltip?: string | ComponentType;
  isDisabled?: boolean;
  noIcon?: boolean;
  inputRef?: any;
  onChange?: (value: any) => void;
  placeholder?: string;
  value?: OptionType;
  readonly?: boolean;
  options: OptionsType<OptionType> | GroupedOptionsType<OptionType>;
  // disabledOptionText?: string;
};

export type SelectOptionProps = ComponentProps<typeof components.Option>;

export type DropdownIndicatorProps = ComponentProps<
  typeof components.DropdownIndicator
>;

const DropdownIndicator = (props: DropdownIndicatorProps) => {
  return (
    components.DropdownIndicator && (
      <components.DropdownIndicator {...props}>
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

const Option = ({ children, ...props }: SelectOptionProps) => (
  <components.Option {...props} isDisabled>
    {!props.selectProps.noIcon && (
      <Icon
        variant="basic"
        icon={polyIcons.Image}
        size="22px"
        color="gray3"
        margin="0 9px -5px 0"
      />
    )}
    {children}
    {/* {oProps.isDisabled && oProps.selectProps.disabledOptionText && (
        <Tooltip>{oProps.selectProps.disabledOptionText}</Tooltip>
      )} */}
  </components.Option>
);

export const Select = ({
  margin,
  id,
  label,
  tooltip,
  inputRef,
  onChange,
  noIcon,
  isDisabled,
  readonly,
  ...props
}: SelectProps) => {
  const currentTheme = useContext(ThemeContext);
  const [menuPortalTarget, setMenuPortalTarget] = useState<
    HTMLElement | undefined
  >();
  useEffect(() => {
    setMenuPortalTarget(document.body);
  }, []);

  // @TODO: properly type this function
  const handleChange = (e?: any) => {
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

  return (
    <>
      <Text as="label" variant="b2m" display="block" margin={margin}>
        {label && (
          <Flex variant="raw" justify={tooltip ? 'spaced' : 'start'}>
            <Text
              color={isDisabled ? 'gray3' : 'gray1'}
              as="span"
              variant="b2m"
            >
              {label}
            </Text>
            {tooltip && <Tooltip variant="icon" content={tooltip} />}
          </Flex>
        )}
      </Text>
      <ReactSelect
        inputId={id}
        ref={inputRef}
        inputRef={inputRef}
        innerRef={inputRef}
        isDisabled={isDisabled}
        styles={currentTheme.SELECT}
        components={{
          Option,
          DropdownIndicator,
          IndicatorSeparator: null,
          ClearIndicator: null,
        }}
        onChange={handleChange}
        readonly={readonly}
        menuIsOpen={readonly ? false : undefined}
        isSearchable={!readonly}
        noIcon={noIcon}
        menuPlacement="auto"
        menuPortalTarget={menuPortalTarget}
        backspaceRemovesValue={false}
        {...props}
      />
    </>
  );
};
