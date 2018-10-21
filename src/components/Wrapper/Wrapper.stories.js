import React from 'react';
import { storiesOf } from '@storybook/react';
import TextField from '@material-ui/core/TextField';
import Wrapper from './Wrapper';

const stories = storiesOf('Wrapper', module);

stories
  .add('Wrapper', () => (
    <Wrapper>
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
    </Wrapper>
  ));
