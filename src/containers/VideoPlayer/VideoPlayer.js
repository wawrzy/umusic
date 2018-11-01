// @flow

import React from 'react';
import YouTube from 'react-youtube';

import VideoControls from '../VideoControls/VideoControls';
import './VideoPlayer.css';

const opts = {
  height: '300',
  width: '300',
  playerVars: {
    autoplay: 0,
    controls: 0,
  },
};

type Props = {};

class VideoPlayer extends React.Component<Props> {
  handlePause = () => {};

  render() {
    return (
      <div className="VideoPlayer">
        <YouTube onPause={this.handlePause} videoId="2g811Eo7K8U" opts={opts} />
        <VideoControls isRoomOwner={false} />
      </div>
    );
  }
}

export default VideoPlayer;
