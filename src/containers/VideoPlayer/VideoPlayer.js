// @flow

import React from 'react';
import YouTube from 'react-youtube';
import { connect } from 'react-redux';

import VideoControls from '../VideoControls/VideoControls';
import { socket } from '../../middlewares/socket';
import { next } from '../../actions/player/controlsMusic';
import currentMusic from '../../actions/player/currentMusic';

import './VideoPlayer.css';

const opts = {
  height: '300',
  width: '300',
  playerVars: {
    autoplay: 0,
    controls: 0,
  },
};

type Props = {
  roomId: string,
  rooms: any,
  userId: string,
  playNext: Function,
  current: Function,
  authorization: string,
};

type State = {
  isOwner: boolean,
  videoId: ?string,
};

const mapStateToProps = state => ({
  rooms: state.getRoom.rooms,
  authorization: state.login.authorization,
  userId: state.login.userId,
});

const mapDispatchToProps = dispatch => ({
  playNext: authorization => dispatch(next(authorization)),
  current: authorization => dispatch(currentMusic(authorization)),
});

class VideoPlayer extends React.Component<Props, State> {
  playerRef: any = React.createRef();

  constructor(props: Props) {
    super(props);

    const { roomId, rooms, userId } = props;

    const room = rooms.find(({ _id }) => _id === roomId);
    const isOwner = room ? room.creator.id === userId : false;

    this.state = {
      isOwner,
      videoId: null,
    };
  }

  componentDidMount() {
    const { current, authorization } = this.props;

    socket.on('playvideo', ({ videoId }) => {
      this.setState({ videoId });
    });

    socket.on('continuevideo', () => {
      if (this.playerRef.current) this.playerRef.current.internalPlayer.playVideo();
    });

    socket.on('pausevideo', () => {
      if (this.playerRef.current) this.playerRef.current.internalPlayer.pauseVideo();
    });

    current(authorization);
  }

  componentDidUpdate(prevProps: Props, prevState: State) {
    const { videoId, isOwner } = this.state;
    const { roomId, rooms, userId, current, authorization } = this.props;

    if (videoId && videoId !== prevState.videoId && this.playerRef.current)
      this.playerRef.current.internalPlayer.playVideo();

    const room = rooms.find(({ _id }) => _id === roomId);
    const owner = room ? room.creator.id === userId : false;

    if (owner !== isOwner) {
      // eslint-disable-next-line
      this.setState({ isOwner: owner });
    }
    if (roomId !== prevProps.roomId) {
      current(authorization);
    }
  }

  componentWillUnmount() {
    socket.off('playvideo');
    socket.off('continuevideo');
    socket.off('pausevideo');
  }

  handleEnd = () => {
    const { playNext, authorization } = this.props;
    const { isOwner } = this.state;

    if (isOwner) playNext(authorization);
  };

  render() {
    const { isOwner, videoId } = this.state;

    if (!videoId) return null;

    return (
      <div className="VideoPlayer">
        <YouTube
          id="player"
          ref={this.playerRef}
          onEnd={this.handleEnd}
          videoId={videoId}
          opts={opts}
        />
        <VideoControls playerRef={this.playerRef} isRoomOwner={isOwner} />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(VideoPlayer);
