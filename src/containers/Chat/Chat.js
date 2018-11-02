// @flow

import * as React from 'react';
import RootRef from '@material-ui/core/RootRef';
import { connect } from 'react-redux';

import getMessages from '../../actions/chat/getMessages';
import sendMessage from '../../actions/chat/sendMessage';
import ChatContainer from '../../components/ChatContainer/ChatContainer';
import ChatMessage from '../../components/ChatMessage/ChatMessage';
import InputForm from '../../components/Input/InputForm';
import { socket } from '../../middlewares/socket';

import './Chat.css';

type User = {
  alias: string,
  id: string,
};

type Message = {
  message: string,
  sender: User,
};

type Props = {
  authorization: string,
  fetchMessages: Function,
  messages: Message[],
  send: Function,
  userId: string,
  roomId: string,
};

const mapStateToProps = state => ({
  messages: state.chat.messages,
  authorization: state.login.authorization,
  userId: state.login.userId,
});

const mapDispatchToProps = dispatch => ({
  fetchMessages: (authorization, roomId) => dispatch(getMessages(authorization, roomId)),
  send: (authorization, message) => dispatch(sendMessage(authorization, message)),
});

class Chat extends React.Component<Props> {
  chatContainer: React.Ref<typeof ChatContainer> = React.createRef();

  componentDidMount() {
    const { authorization, fetchMessages, roomId } = this.props;

    fetchMessages(authorization, roomId);

    socket.on('chat', () => {
      fetchMessages(authorization, roomId);
    });
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  scrollToBottom = () => {
    // $FlowFixMe
    this.chatContainer.current.scrollTop = this.chatContainer.current.scrollHeight;
  };

  renderMessages: any = () => {
    const { messages, userId } = this.props;

    return messages.map(({ message, sender }, index) => {
      const key = `${message}${index}`;
      const isReceived = sender.id !== userId;

      return (
        <ChatMessage key={key} message={message} isReceived={isReceived} alias={sender.alias} />
      );
    });
  };

  handleSend = (message: string) => {
    const { authorization, send } = this.props;

    send(authorization, message);
  };

  render() {
    return (
      <div className="Chat">
        <RootRef rootRef={this.chatContainer}>
          <ChatContainer className="ChatWidth">{this.renderMessages()}</ChatContainer>
        </RootRef>
        <InputForm
          onEnterKey={this.handleSend}
          className="ChatInput"
          placeholder="Message"
          id="ChatInput"
        />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Chat);
