import { allCountries, countryNames } from 'country-region-data';
import { isEmpty } from 'lodash';
import { ComponentProps } from 'react';
import { polyIcons } from '../../theme';
import { Select } from '../Select';

const countryOptions = allCountries.map(([country]) => {
  const countryIcon = country.replace(/\W/gi, '');

  return {
    // NOTE: country icon name must match with country name from 'country-region-data' package
    // @ts-ignore
    icon: polyIcons[countryIcon],
    value: country,
    label: country,
  };
});

type CountrySelectProps = Omit<ComponentProps<typeof Select>, 'variant'> & {
  countries?: typeof countryNames;
};

export function CountrySelector(props: CountrySelectProps) {
  const { countries, ...selectProps } = props;

  const options = isEmpty(countries)
    ? countryOptions
    : countryOptions.filter((option) => countries?.includes(option.value));

  return <Select {...selectProps} variant="basic" options={options} />;
}
