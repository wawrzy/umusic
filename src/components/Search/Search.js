// @flow

import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import './Search.css';

const Search = () => (
  <div className="Search">
    <div className="SearchIcon">
      <SearchIcon />
    </div>
    <InputBase
      placeholder="Search…"
    />
  </div>
);

export default Search;
