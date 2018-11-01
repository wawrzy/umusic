// @flow

import React from 'react';
import Pause from '@material-ui/icons/Pause';
import PlayArrow from '@material-ui/icons/PlayArrow';
import VolumeOff from '@material-ui/icons/VolumeOff';
import VolumeUp from '@material-ui/icons/VolumeUp';

import VideoAction from '../../components/VideoAction/VideoAction';
import './VideoControls.css';

type Props = {
  isRoomOwner: boolean,
};

type State = {
  pause: boolean,
  mute: boolean,
};

class VideoPlayer extends React.Component<Props, State> {
  state = {
    pause: false,
    mute: false,
  };

  handlePause = () => {
    this.setState({ pause: true });
  };

  handlePlay = () => {
    this.setState({ pause: false });
  };

  handleMute = () => {
    this.setState({ mute: true });
  };

  handleUnmute = () => {
    this.setState({ mute: false });
  };

  render() {
    const { isRoomOwner } = this.props;
    const { pause, mute } = this.state;

    return (
      <div className="VideoControls">
        <VideoAction hide={!isRoomOwner || pause} onClick={this.handlePause}>
          <Pause fontSize="large" />
        </VideoAction>
        <VideoAction hide={!isRoomOwner || !pause} onClick={this.handlePlay}>
          <PlayArrow fontSize="large" />
        </VideoAction>
        <VideoAction hide={mute} onClick={this.handleMute}>
          <VolumeOff fontSize="large" />
        </VideoAction>
        <VideoAction hide={!mute} onClick={this.handleUnmute}>
          <VolumeUp fontSize="large" />
        </VideoAction>
      </div>
    );
  }
}

export default VideoPlayer;
