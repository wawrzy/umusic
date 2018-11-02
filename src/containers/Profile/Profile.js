// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import Avatar from '../../components/Avatar/Avatar';
import InputForm from '../../components/Input/InputForm';
import Followers from './Followers';
import './Profile.css';

const mapStateToProps = state => ({
  me: state.login,
  users: state.getUsers,
});

class Profile extends Component {
  render() {
    const { me, users } = this.props;
    return (
      <div className="profileComponent">
        <form onSubmit={this.onSubmit} className="all">
          <Paper className="paper" elevation={2}>
            <Avatar
              cN="avatar"
              user="me"
              img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT4HnS1e8I3coO-06RSBo_il9PbjHX9d7I9bG2MDFqMRHwIhvWcg"
            />
            <div className="editBtnPosition">
              <Button
                variant="fab"
                color="primary"
                aria-label="Edit"
                className="editBtn"
                onClick={e => this.editInfo(e)}
              >
                <EditIcon />
              </Button>
            </div>
            <div className="infoTxt">
              <div className="AliasDiv"> Alias </div>
              <InputForm id="read-only-input" defaultValue={me.alias} margin="normal" readOnly />
              <div className="EmailDiv"> Email </div>
              <InputForm id="read-only-input" margin="normal" defaultValue={me.email} readOnly />
            </div>
            <Followers followers={users.users} />
          </Paper>
        </form>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Profile);
