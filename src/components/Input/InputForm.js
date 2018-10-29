// @flow

import React from 'react';
import TextField from '@material-ui/core/TextField';

import './InputForm.css';

type Props = {
  id: string,
  name: string,
  type: string,
  autoComplete: string,
}

const InputForm = ({ autoComplete, id, name, type }: Props) => (
  <TextField
    autoComplete={autoComplete}
    id={id}
    label={name}
    type={type}
    margin="normal"
  />
);

export default InputForm;
