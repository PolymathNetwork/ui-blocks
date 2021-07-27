import { FC, useContext } from 'react';
import { ThemeContext } from 'styled-components';
import ReactSelect from 'react-select';

import { Flex } from '../Flex';
import { Text } from '../Text';
import { Tooltip } from '../Tooltip';
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
      <Text variant="label" display="block" margin={margin}>
        {label && tooltip && (
          <Flex variant="raw" justify={tooltip ? 'spaced' : 'start'}>
            <Text variant="span" format="b2m">
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
