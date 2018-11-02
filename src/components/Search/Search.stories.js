import React from 'react';
import { storiesOf } from '@storybook/react';
import Search from './Search';

const stories = storiesOf('Search', module);

stories
  .add('Search', () => (
    <Search />
  ));

