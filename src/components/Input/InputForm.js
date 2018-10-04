// @flow

import React from 'react';
import TextField from '@material-ui/core/TextField';

type Props = {
  name: string,
  type: string,
}

const InputForm = ({ name, type }: Props) => (
  <TextField
    id={name}
    label={name}
    type={type}
    margin="normal"
  />
);

export default InputForm;
