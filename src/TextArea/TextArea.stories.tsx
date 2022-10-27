import { ComponentProps, useState } from 'react';
import { Story } from '@storybook/react';

import { TextArea } from './TextArea';

export default {
  title: 'Polyblocks/TextArea',
  component: TextArea,
};
const maxLength = 10;

const Template: Story<ComponentProps<typeof TextArea>> = (props: any) => {
  const [currentLength, setCurrentLength] = useState(0);
  const [errorMsg, setErrorMsg] = useState('');

  const onChange = (value: string) => {
    setCurrentLength(value.length);

    if (value.length <= maxLength) {
      setErrorMsg('');
    } else {
      setErrorMsg('Error message');
    }
  };

  return (
    <TextArea
      {...props}
      currentLength={currentLength}
      onChange={onChange}
      errorMsg={errorMsg}
    />
  );
};

export const Basic = Template.bind({});
Basic.args = {
  id: 'textarea',
  maxLength,
  placeholder: 'Placeholder text',
  tooltip: 'Tooltip',
};
