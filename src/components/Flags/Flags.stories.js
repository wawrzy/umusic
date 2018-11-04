import React from 'react';
import { storiesOf } from '@storybook/react';
import Flags from './Flags';

const stories = storiesOf('Flags', module);

stories.add('default', () => (
  <Flags countries={['GB', 'FR']} defaultCountry="FR" onSelect={() => {}} />
));
