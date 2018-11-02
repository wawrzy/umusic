// @flow

import React from 'react';
import { connect } from 'react-redux';

import Chat from '../Chat/Chat';
import VideoPlayer from '../VideoPlayer/VideoPlayer';
import leaveRoom from '../../actions/room/leaveRoom';

type Props = {
  leave: Function,
  authorization: string,
};

const mapStateToProps = state => ({
  authorization: state.login.authorization,
});

const mapDispatchToProps = dispatch => ({
  leave: authorization => dispatch(leaveRoom(authorization)),
});

class Room extends React.Component<Props> {
  componentWillUnmount() {
    const { leave, authorization } = this.props;

    leave(authorization);
  }

  render() {
    const roomId = window.location
      .toString()
      .split('/')
      .reverse()[0];

    return (
      <div>
        <VideoPlayer roomId={roomId} />
        <Chat roomId={roomId} />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Room);
