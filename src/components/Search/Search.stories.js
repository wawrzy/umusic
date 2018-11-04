import React from 'react';
import { storiesOf } from '@storybook/react';
import { SearchBar } from './Search';

const stories = storiesOf('Search', module);

stories.add('Search', () => <SearchBar onChange={() => {}} t={() => 'Search'} />);
