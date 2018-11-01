// @flow

import React from 'react';
import { storiesOf } from '@storybook/react';
import ChatMessage from './ChatMessage';

const stories = storiesOf('Receive', module);

stories.add('Receive', () => (
  <div style={{ display: 'flex', flexDirection: 'column', width: '50%' }}>
    <ChatMessage alias="Okde" message="Je test" isReceived />
    <ChatMessage alias="Okde" message="Je test" isReceived={false} />
    <ChatMessage alias="Okde" message="Je test" isReceived={false} />
  </div>
));
