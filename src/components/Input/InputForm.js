// @flow

import React from 'react';
import TextField from '@material-ui/core/TextField';

import './InputForm.css';

type Props = {
  id: string,
  name: string,
  type: string,
}

const InputForm = ({ id, name, type }: Props) => (
  <TextField
    id={id}
    label={name}
    type={type}
    margin="normal"
  />
);

export default InputForm;
