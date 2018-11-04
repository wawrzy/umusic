// @flow

import React from 'react';
import ReactFlagsSelect from 'react-flags-select';

import 'react-flags-select/css/react-flags-select.css';
import './Flags.css';

type Props = {
  countries: string[],
  defaultCountry: string,
  onSelect: Function,
  customLabels: Object,
};

const Flags = ({ countries, defaultCountry, onSelect, customLabels }: Props) => (
  <ReactFlagsSelect
    className="arrow-down"
    countries={countries}
    selectedSize={20}
    defaultCountry={defaultCountry}
    customLabels={customLabels}
    showOptionLabel={false}
    showSelectedLabel={false}
    onSelect={onSelect}
  />
);

export default Flags;
