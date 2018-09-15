// @flow

import React from 'react';

type TSampeProps = {
  name: string,
};

const Sample = ({ name }: TSampeProps) => (
  <button type="button">
    { name }
    bite
  </button>
);

export default Sample;
