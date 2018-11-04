// @flow

import React from 'react';
import { connect } from 'react-redux';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Person from '@material-ui/icons/Person';
import Paper from '@material-ui/core/Paper';

import { getRoom } from '../../actions/room/getRoom';
import joinRoom from '../../actions/room/joinRoom';
import Search from '../../components/Search/Search';
import './NavBar.css';

type User = {
  alias: string,
  email: string,
  id: string,
};

type Room = {
  users: User[],
  _id: string,
  name: string,
  createdAt: number,
  creator: User,
};

type Props = {
  rooms: Room[],
  authorization: string,
  join: Function,
  searchRooms: Function,
};

type State = {
  searchValue: string,
};

const mapStateToProps = state => ({
  rooms: state.getRoom.rooms,
  authorization: state.login.authorization,
});

const mapDispatchToProps = dispatch => ({
  join: (roomId, authorization, passsword) => dispatch(joinRoom(roomId, authorization, passsword)),
  searchRooms: (authorization, name) => dispatch(getRoom(authorization, `?name=${name}`)),
});
class MenuList extends React.Component<Props, State> {
  state = {
    searchValue: '',
  };

  handleJoin = room => {
    const { _id } = room;
    const { authorization, join, searchRooms } = this.props;
    const { searchValue } = this.state;

    join(_id, authorization, '');
    setTimeout(() => searchRooms(authorization, searchValue), 200);
  };

  handleSearch = (event: any) => {
    const { searchRooms, authorization } = this.props;
    const { value } = event.target;

    searchRooms(authorization, value);
    this.setState({ searchValue: value });
  };

  render() {
    const { rooms } = this.props;

    return (
      <div className="HiddenOverflow">
        <List className="SizeList">
          <Search onChange={this.handleSearch} />
          {rooms.map((room: Room) => (
            <Paper onClick={() => this.handleJoin(room)} className="Paper" key={room._id}>
              <ListItem button className="ListItem">
                <ListItemText className="NameList ListItemText" primary={room.name} />
                <ListItemText className="CreatorList ListItemText" primary={room.creator.alias} />
                <div className="NumberList">
                  <Person />
                  <ListItemText className="ListItemText" primary={room.users.length} />
                </div>
              </ListItem>
            </Paper>
          ))}
        </List>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MenuList);
