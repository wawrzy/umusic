// @flow

import * as React from 'react';
import './AuthContainer.css';

type Props = {
  children: React.Node,
}

const AuthContainer = ({ children }: Props) => (
  <div className="AuthContainer">
    {children}
  </div>
);

export default AuthContainer;
