// @flow

import React from 'react';
import { connect } from 'react-redux';

import Chat from '../Chat/Chat';
import VideoPlayer from '../VideoPlayer/VideoPlayer';
import leaveRoom from '../../actions/room/leaveRoom';

type Props = {};

const mapStateToProps = state => ({
  authorization: state.login.authorization,
});

const mapDispatchToProps = dispatch => ({
  leave: authorization => dispatch(leaveRoom(authorization)),
});

class Room extends React.Component<Props> {
  componentWillUnmount() {}

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
