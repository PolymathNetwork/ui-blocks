import { ComponentProps } from 'react';
import { Story } from '@storybook/react';
import { CountrySelector } from './CountrySelector';

const Template: Story<ComponentProps<typeof CountrySelector>> = (props) => (
  <CountrySelector {...props} />
);

export default {
  title: 'Polyblocks/CountrySelector',
  component: CountrySelector,
};

export const Basic = Template.bind({});
Basic.args = {
  label: 'Select country',
};

export const CertainCountries = Template.bind({});
CertainCountries.args = {
  label: 'Select country',
  countries: ['Canada', 'United States'],
};
