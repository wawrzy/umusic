import React from 'react';
import { storiesOf } from '@storybook/react';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContainer from './SnackbarContainer';

const stories = storiesOf('Snackbar', module);

stories
  .add('Snackbar Error', () => (
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      open="true"
    >
      <SnackbarContainer
        message="Error message"
        variant="error"
      />
    </Snackbar>
  ))
  .add('Snackbar Success', () => (
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      open="true"
    >
      <SnackbarContainer
        message="Success message"
        variant="success"
      />
    </Snackbar>
  ));
