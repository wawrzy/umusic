// @flow

import * as React from 'react';
import './Wrapper.css';

type Props = {
  children: React.Node,
}

const Wrapper = ({ children }: Props) => (
  <div className="Wrapper">
    {children}
  </div>
);

export default Wrapper;
