// @flow

import React from 'react';
import { connect } from 'react-redux';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Person from '@material-ui/icons/Person';
import Paper from '@material-ui/core/Paper';
import './NavBar.css';
import Search from '../../components/Search/Search';

type Props = {
  rooms: [
    {
      users: [],
      _id: string,
      name: string,
      createdAt: number,
      creator: {
        alias: string,
        email: string,
        id: string,
      },
    },
  ],
};

const mapStateToProps = state => ({
  rooms: state.getRoom.rooms,
});

const MenuList = ({ rooms }: Props) => (
  <div className="HiddenOverflow">
    <List className="SizeList">
      <Search />
      {rooms.map(index => (
        <Paper className="Paper" key={index._id}>
          <ListItem button className="ListItem">
            <ListItemText className="NameList ListItemText" primary={index.name} />
            <ListItemText className="CreatorList ListItemText" primary={index.creator.alias} />
            <div className="NumberList">
              <Person />
              <ListItemText className="ListItemText" primary={index.users.length + 1} />
            </div>
          </ListItem>
        </Paper>
      ))}
    </List>
  </div>
);

export default connect(mapStateToProps)(MenuList);
