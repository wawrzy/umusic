// @flow

import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import './ChatMessage.css';

type Props = {
  message: string,
  isReceived: boolean,
  alias: string,
};

const getPosition = isReceived => (isReceived ? 'receive' : 'send');

const getAlias = (isReceived, alias) => (isReceived ? alias : '');

const ChatMessage = ({ message, isReceived, alias }: Props) => (
  <div className="padding-8">
    <Typography className="alias">{getAlias(isReceived, alias)}</Typography>
    <Paper
      className={`ChatMessage message-${getPosition(isReceived)}`}
      elevation={4}
      square
      aria-describedby="cond"
    >
      <Typography className={`padding-12 color-text-${getPosition(isReceived)}`} component="p">
        {message}
      </Typography>
    </Paper>
  </div>
);

export default ChatMessage;
