import React, { FC } from 'react';
import { Context } from './Context';
import { Radio } from './Radio';

export interface Props {
  name?: string;
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const RadioGroupComponent: FC<Props> = (props) => {
  const { children, ...otherProps } = props;

  return (
    <div role="radiogroup">
      <Context.Provider value={{ ...otherProps }}>{children}</Context.Provider>
    </div>
  );
};

export const RadioGroup = Object.assign(RadioGroupComponent, {
  Radio,
});
