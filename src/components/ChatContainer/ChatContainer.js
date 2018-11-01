// @flow

import * as React from 'react';
import Paper from '@material-ui/core/Paper';

import './ChatContainer.css';

type Props = {
  children: React.Node,
  className?: string,
};

const ChatContainer = ({ children, className }: Props) => (
  <Paper className={`ChatContainer ${className || ''}`} elevation={3}>
    {children}
  </Paper>
);

ChatContainer.defaultProps = {
  className: '',
};

export default ChatContainer;
