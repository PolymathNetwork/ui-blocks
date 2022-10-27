import { ComponentType } from 'react';
import styled from 'styled-components';
import { Tooltip } from '../components/Tooltip';
import { Text } from '../components/Text';
import { Box } from '../components/Box';
import { Flex } from '../components/Flex';

export type TextAreaProps = {
  id: string;
  placeholder: string;
  maxLength: number;
  currentLength: number;
  value: string;
  onChange: (value: string) => void;
  errorMsg?: string;
  tooltip?: string | ComponentType;
};

const LabelComponent = styled.label(() => ({}));

export const TextArea = ({
  errorMsg,
  maxLength,
  currentLength,
  id,
  placeholder,
  value,
  tooltip,
  onChange,
}: TextAreaProps) => {
  return (
    <Box width="fit-content" variant="raw" display="block">
      <Flex variant="raw" justify="spaced">
        <LabelComponent htmlFor={id}>Label</LabelComponent>
        {tooltip && <Tooltip variant="icon" content={tooltip} />}
      </Flex>
      <textarea
        id={id}
        value={value}
        maxLength={10}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        style={{
          padding: '12px 16px',
          minHeight: '120px',
          minWidth: '395px',
        }}
      />
      <Flex variant="raw" justify={errorMsg ? 'spaced' : 'end'}>
        {errorMsg && (
          <Text as="span" variant="b3" color="danger2">
            {errorMsg}
          </Text>
        )}
        <Text as="span" variant="b3">
          {currentLength + '/' + maxLength}
        </Text>
      </Flex>
    </Box>
  );
};
