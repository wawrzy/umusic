import React from 'react';
import { storiesOf } from '@storybook/react';
import SubmitButton from './Button';

const stories = storiesOf('Button', module);

stories
  .add('SubmitButton', () => (
    <SubmitButton text="Accept" variant="contained" color="primary" />
  ));
