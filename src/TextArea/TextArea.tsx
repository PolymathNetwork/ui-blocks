import {
  ChangeEvent,
  ComponentType,
  forwardRef,
  useEffect,
  useState,
} from 'react';
import styled from 'styled-components';
import { Tooltip } from '../components/Tooltip';
import { Text } from '../components/Text';
import { Box } from '../components/Box';
import { Flex } from '../components/Flex';
import SvgResizingControl from '../theme/icons/svg/resizing-control.svg';
import SvgResizingControlDisabled from '../theme/icons/svg/resizing-control-disabled.svg';

export type TextAreaProps = {
  id: string;
  placeholder: string;
  maxLength: number;
  label: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  errorMsg?: string;
  tooltip?: string | ComponentType;
  disabled?: boolean;
  readOnly?: boolean;
};

const BoxComponent = styled(Box)(() => ({
  alignSelf: 'flex-end',
}));

const LabelComponent = styled.label<{ disabled?: boolean }>(
  ({ theme, disabled }) => ({
    fontSize: '14px',
    color: disabled ? theme.COLOR.gray3 : theme.COLOR.gray1,
    fontWeight: 500,
  }),
);

const TextAreaComponent = styled.textarea<
  Partial<TextAreaProps> & { blur: boolean }
>(({ theme, blur, errorMsg }) => ({
  position: 'relative',
  fontSize: '14px',
  color: theme.COLOR.gray1,
  fontWeight: 400,
  borderRadius: '2px',
  padding: '12px 16px',
  minHeight: '120px',
  borderColor: errorMsg ? theme.COLOR.danger2 : theme.COLOR.gray3,
  backgroundColor: blur && errorMsg ? theme.COLOR.danger3 : theme.COLOR.light,
  minWidth: '395px',
  '&::placeholder': {
    color: theme.COLOR.gray3,
  },
  '&:hover': {
    borderColor: theme.COLOR.gray2,
  },
  '&:focus': {
    borderColor: errorMsg ? theme.COLOR.danger2 : theme.COLOR.brandMain,
    outline: errorMsg ? 'none' : '2px solid',
    outlineColor: theme.COLOR.brandMain2,
    outlineOffset: '1px',
  },
  '&:read-only': {
    background: theme.COLOR.gray5,
    borderColor: theme.COLOR.gray5,
    '&::placeholder': {
      color: theme.COLOR.gray2,
    },
  },
  '&:disabled': {
    background: theme.COLOR.light,
    borderColor: theme.COLOR.gray5,
    pointerEvents: 'none',
    '&::-webkit-resizer': {
      backgroundImage: `url(${SvgResizingControlDisabled})`,
    },
  },
  '&::-webkit-resizer': {
    backgroundImage: `url(${SvgResizingControl})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'bottom right',
  },
}));

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  function ForwardRefTextArea(
    {
      errorMsg,
      maxLength,
      id,
      value = '',
      placeholder,
      tooltip,
      label,
      disabled,
      readOnly,
      onChange,
    },
    ref,
  ) {
    const [blur, setBlur] = useState(false);
    const [error, setError] = useState<string | undefined>('');

    useEffect(() => {
      if (value.length <= maxLength) {
        setError('');
      } else {
        setError(errorMsg);
      }
    }, [value.length]);

    const handleBlur = () => {
      setBlur(true);
    };

    const handleFocus = () => {
      setBlur(false);
    };

    return (
      <Box width="fit-content" variant="raw" display="block">
        <Flex variant="raw" justify="spaced" height="24px">
          <LabelComponent htmlFor={id} disabled={disabled}>
            {label}
          </LabelComponent>
          <BoxComponent variant="raw">
            {tooltip && <Tooltip variant="icon" content={tooltip} />}
          </BoxComponent>
        </Flex>
        <TextAreaComponent
          readOnly={readOnly}
          disabled={disabled}
          ref={ref}
          id={id}
          value={value}
          placeholder={placeholder}
          blur={blur}
          errorMsg={error}
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <Flex variant="raw" justify={error ? 'spaced' : 'end'}>
          {error && (
            <Text as="span" variant="b3" color="danger2">
              {error}
            </Text>
          )}
          <Text as="span" variant="b3">
            {value.length + '/' + maxLength}
          </Text>
        </Flex>
      </Box>
    );
  },
);
