// @flow

import React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { withNamespaces } from 'react-i18next';

import Chat from '../Chat/Chat';
import VideoPlayer from '../VideoPlayer/VideoPlayer';
import leaveRoom from '../../actions/room/leaveRoom';

import './Room.css';

type Props = {
  authorization: string,
  rooms: Object[],
  userId: string,
  leave: Function,
  t: Function,
};

type State = {
  isOwner: boolean,
};

const mapStateToProps = state => ({
  authorization: state.login.authorization,
  rooms: state.getRoom.rooms,
  userId: state.login.userId,
});

const mapDispatchToProps = dispatch => ({
  leave: authorization => dispatch(leaveRoom(authorization)),
});

class Room extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    const { rooms, userId } = props;

    const roomId = this.getRoomId();
    const room = rooms.find(({ _id }) => _id === roomId);
    const isOwner = room ? room.creator.id === userId : false;

    this.state = {
      isOwner,
    };
  }

  componentDidUpdate() {
    const { rooms, userId } = this.props;
    const { isOwner } = this.state;

    const roomId = this.getRoomId();
    const room = rooms.find(({ _id }) => _id === roomId);

    const owner = room ? room.creator.id === userId : false;

    if (owner !== isOwner) {
      // eslint-disable-next-line
      this.setState({ isOwner: owner });
    }
  }

  getRoomId = () => {
    const roomId = window.location
      .toString()
      .split('/')
      .reverse()[0];

    return roomId;
  };

  handleDelete = () => {
    const { authorization, leave } = this.props;

    leave(authorization);
  };

  renderAction = () => {
    const { t } = this.props;
    const { isOwner } = this.state;

    if (!isOwner) return null;

    return (
      <div className="Actions">
        <Button onClick={this.handleDelete} variant="contained" color="primary">
          {t('deleteRoom')}
        </Button>
      </div>
    );
  };

  render() {
    const roomId = this.getRoomId();

    return (
      <div>
        {this.renderAction()}
        <VideoPlayer roomId={roomId} />
        <Chat roomId={roomId} />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withNamespaces('room')(Room));
