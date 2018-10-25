// @flow

import React from 'react';
import Button from '@material-ui/core/Button';

type Props = {
  variant: string,
  text: string,
  color: string,
}

const SubmitButton = ({ variant, text, color }: Props) => (
  <Button
    variant={variant}
    color={color}
  >
    {text}
  </Button>
);

export default SubmitButton;
