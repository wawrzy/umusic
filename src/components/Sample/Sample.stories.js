
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';
import Sample from './Sample';

const stories = storiesOf('Sample', module);

stories.addDecorator(withKnobs);

const createButtonName = () => select('Button', ['Micka', 'Chanto', 'Ghizou', 'Jo', 'Robin'], 'Micka');

stories
  .add('all', () => (
    <Sample name={createButtonName()} />
  ));
