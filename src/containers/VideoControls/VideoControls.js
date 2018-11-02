// @flow

import React from 'react';
import { connect } from 'react-redux';
import Pause from '@material-ui/icons/Pause';
import PlayArrow from '@material-ui/icons/PlayArrow';
import VolumeOff from '@material-ui/icons/VolumeOff';
import VolumeUp from '@material-ui/icons/VolumeUp';
import SkipNext from '@material-ui/icons/SkipNext';

import { next, pause, play } from '../../actions/player/controlsMusic';
import VideoAction from '../../components/VideoAction/VideoAction';
import './VideoControls.css';

type Props = {
  isRoomOwner: boolean,
  authorization: string,
  playNext: Function,
  pauseMusic: Function,
  playMusic: Function,
  playerRef: any,
};

type State = {
  isPaused: boolean,
  mute: boolean,
};

const mapStateToProps = state => ({
  authorization: state.login.authorization,
});

const mapDispatchToProps = dispatch => ({
  playNext: authorization => dispatch(next(authorization)),
  pauseMusic: authorization => dispatch(pause(authorization)),
  playMusic: authorization => dispatch(play(authorization)),
});

class VideoPlayer extends React.Component<Props, State> {
  state = {
    isPaused: false,
    mute: false,
  };

  handleNext = () => {
    const { isRoomOwner, playNext, authorization } = this.props;

    if (isRoomOwner) playNext(authorization);
  };

  handlePause = () => {
    const { isRoomOwner, pauseMusic, authorization } = this.props;

    if (isRoomOwner) {
      pauseMusic(authorization);
      this.setState({ isPaused: true });
    }
  };

  handlePlay = () => {
    const { isRoomOwner, playMusic, authorization } = this.props;

    if (isRoomOwner) {
      playMusic(authorization);
      this.setState({ isPaused: false });
    }
  };

  handleMute = () => {
    const { playerRef } = this.props;

    if (playerRef.current) playerRef.current.internalPlayer.mute();

    this.setState({ mute: true });
  };

  handleUnmute = () => {
    const { playerRef } = this.props;

    if (playerRef.current) playerRef.current.internalPlayer.unMute();

    this.setState({ mute: false });
  };

  render() {
    const { isRoomOwner } = this.props;
    const { isPaused, mute } = this.state;

    return (
      <div className="VideoControls">
        <VideoAction hide={mute} onClick={this.handleMute}>
          <VolumeOff fontSize="large" />
        </VideoAction>
        <VideoAction hide={!mute} onClick={this.handleUnmute}>
          <VolumeUp fontSize="large" />
        </VideoAction>
        <VideoAction hide={!isRoomOwner || isPaused} onClick={this.handlePause}>
          <Pause fontSize="large" />
        </VideoAction>
        <VideoAction hide={!isRoomOwner || !isPaused} onClick={this.handlePlay}>
          <PlayArrow fontSize="large" />
        </VideoAction>
        <VideoAction hide={!isRoomOwner} onClick={this.handleNext}>
          <SkipNext fontSize="large" />
        </VideoAction>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(VideoPlayer);
