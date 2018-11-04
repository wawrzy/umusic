// @flow

import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { withNamespaces } from 'react-i18next';

import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';

import './Search.css';

type Suggestion = {
  label: string,
  value: string,
};

type Props = {
  onChange: Function,
  t: Function,
  suggestions?: Suggestion[],
  onSuggestClick?: Function,
};

type State = {
  searchValue: string,
};

export class Search extends React.Component<Props, State> {
  static defaultProps = {
    suggestions: [],
    onSuggestClick: () => {},
  };

  state = {
    searchValue: '',
  };

  handleChange = (event: any) => {
    const { onChange } = this.props;
    const { value } = event.target;

    if (onChange) onChange(event);

    this.setState({ searchValue: value });
  };

  handleSuggestClick = (label: string) => {
    const { onSuggestClick } = this.props;

    if (onSuggestClick) {
      this.setState({ searchValue: '' });
      onSuggestClick(label);
    }
  };

  renderSuggestions = () => {
    const { suggestions } = this.props;
    const { searchValue } = this.state;

    if (!suggestions || searchValue === '') return null;

    return suggestions.map(({ value, label }, index) => {
      const key = `${value}${index}`;

      return (
        <MenuItem onClick={() => this.handleSuggestClick(label)} key={key}>
          {value}
        </MenuItem>
      );
    });
  };

  render() {
    const { t } = this.props;
    const { searchValue } = this.state;

    return (
      <div className="Container">
        <div className="Search">
          <div className="SearchIcon">
            <SearchIcon />
          </div>
          <InputBase value={searchValue} onChange={this.handleChange} placeholder={t('search')} />
        </div>
        <div className="SuggestContainer">
          <Paper square>{this.renderSuggestions()}</Paper>
        </div>
      </div>
    );
  }
}

export default withNamespaces('navbar')(Search);
