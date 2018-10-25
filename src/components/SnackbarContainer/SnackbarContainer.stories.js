import React from 'react';
import { storiesOf } from '@storybook/react';
import SnackbarContainer from './SnackbarContainer';

const stories = storiesOf('Snackbar', module);

stories
  .add('Snackbar Error', () => (
    <SnackbarContainer
      open="true"
      handleClose=""
      variant="error"
      message="error message"
    />))
  .add('Snackbar Success', () => (
    <SnackbarContainer
      open="true"
      handleClose=""
      variant="success"
      message="success message"
    />));
