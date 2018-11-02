// @flow

import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import './Search.css';

type Props = {
  onChange: Function,
};

const Search = ({ onChange }: Props) => (
  <div className="Search">
    <div className="SearchIcon">
      <SearchIcon />
    </div>
    <InputBase onChange={onChange} placeholder="Search…" />
  </div>
);

export default Search;
