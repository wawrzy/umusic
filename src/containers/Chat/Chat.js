// @flow

import * as React from 'react';
import RootRef from '@material-ui/core/RootRef';

import ChatContainer from '../../components/ChatContainer/ChatContainer';
import ChatMessage from '../../components/ChatMessage/ChatMessage';
import InputForm from '../../components/Input/InputForm';

import './Chat.css';

type Message = {
  message: string,
  isReceived: boolean,
  alias: string,
};

type State = {
  messages: Message[],
};

type Props = {};

class Chat extends React.Component<Props, State> {
  state = {
    messages: [
      { message: 'Ahah', isReceived: true, alias: 'ok' },
      { message: 'Bhbh', isReceived: false, alias: 'bb' },
      { message: 'Bhbh', isReceived: false, alias: 'bb' },
      { message: 'Ahah', isReceived: true, alias: 'ok' },
      { message: 'Ahah', isReceived: true, alias: 'ok' },
      { message: 'Ahah', isReceived: true, alias: 'ok' },
      { message: 'Bhbh', isReceived: false, alias: 'bb' },
    ],
  };

  chatContainer: React.Ref<typeof ChatContainer> = React.createRef();

  componentDidMount() {
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  scrollToBottom = () => {
    // $FlowFixMe
    this.chatContainer.current.scrollTop = this.chatContainer.current.scrollHeight;
  };

  renderMessages: any = () => {
    const { messages } = this.state;

    return messages.map(({ message, isReceived, alias }, index) => {
      const key = `${message}${index}`;

      return <ChatMessage key={key} message={message} isReceived={isReceived} alias={alias} />;
    });
  };

  render() {
    return (
      <div className="Chat">
        <RootRef rootRef={this.chatContainer}>
          <ChatContainer className="ChatWidth">{this.renderMessages()}</ChatContainer>
        </RootRef>
        <InputForm className="ChatInput" placeholder="Message" id="ChatInput" />
      </div>
    );
  }
}

export default Chat;
