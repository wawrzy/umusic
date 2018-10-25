import React from 'react';
import { storiesOf } from '@storybook/react';
import TextField from '@material-ui/core/TextField';
import AuthContainer from './AuthContainer';

const stories = storiesOf('AuthContainer', module);

stories
  .add('AuthContainer', () => (
    <AuthContainer>
      <div>
        <TextField
          id="name"
          label="name"
          type="default"
          margin="normal"
        />
        <TextField
          id="email"
          label="email"
          type="default"
          margin="normal"
        />
      </div>
    </AuthContainer>
  ));
