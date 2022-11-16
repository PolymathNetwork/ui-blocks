import { ChangeEvent, ComponentProps, useState } from 'react';
import { Story } from '@storybook/react';

import { TextArea } from './TextArea';

export default {
  title: 'Polyblocks/TextArea',
  component: TextArea,
};
const maxLength = 300;

const DynamicTemplate: Story<ComponentProps<typeof TextArea>> = (
  props: any,
) => {
  const [value, setValue] = useState('');

  const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const currentValue = e.target.value;
    setValue(currentValue);
  };

  return (
    <TextArea
      {...props}
      value={value}
      onChange={onChange}
      errorMsg="Error message"
    />
  );
};

const Template: Story<ComponentProps<typeof TextArea>> = (props: any) => (
  <TextArea {...props} />
);

export const Basic = DynamicTemplate.bind({});
Basic.args = {
  id: 'textarea',
  label: 'Text area label',
  maxLength,
  placeholder: 'Placeholder text',
  tooltip: 'Tooltip',
};

export const Disabled = Template.bind({});
Disabled.args = {
  id: 'textareaDisabled',
  label: 'Disabled textarea',
  placeholder: "Can't type here",
  disabled: true,
  maxLength,
};

export const ReadOnly = Template.bind({});
ReadOnly.args = {
  id: 'textareaReadOnly',
  label: 'Read only textarea',
  value: 'Read only value',
  placeholder: "Can't type here",
  readOnly: true,
  maxLength,
};
