import { FC, useContext } from 'react';
import { ThemeContext } from 'styled-components';
import ReactSelect from 'react-select';

import { OptionType } from '../../theme/types';
import { Flex } from '../Flex';
import { Text } from '../Text';
import { SelectProps } from './types';
import { Option } from './Option';
import { DropdownIndicator } from './DropdownIndicator';

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

  // @TODO: fix typing
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

  return (
    <>
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
      </Text>
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
        noIcon={noIcon}
        menuPlacement="auto"
        menuPortalTarget={document.body}
        backspaceRemovesValue={false}
        {...props}
      />
    </>
  );
};
