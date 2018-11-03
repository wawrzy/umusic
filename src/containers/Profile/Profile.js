// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';

import { editUser } from '../../actions/users/users';
import Avatar from '../../components/Avatar/Avatar';
import InputForm from '../../components/Input/InputForm';
import Followers from './Followers';

import './Profile.css';

type Props = {
  editAction: Function,
  me: {
    alias: string,
    email: string,
    authorization: string,
    userId: string,
  },
  users: [{
    alias: string,
    email: string,
    id: string,
  }]
};

const mapDispatchToProps = dispatch => ({
  editAction: item => dispatch(editUser(item)),
});

const mapStateToProps = state => ({
  me: state.login,
  users: state.getUsers,
});

const styledUser = { borderRadius: '100px', width: '100px', height: '100px' };

class Profile extends Component<Props> {
  state = {
    readOnly: true,
  };

  handleClick = () => {
    document.getElementById('SubmitButton').style.display = 'block';
    this.setState({
      readOnly: false,
    });
  };

  onSubmit = e => {
    const { editAction, me } = this.props;
    e.preventDefault();
    document.getElementById('SubmitButton').style.display = 'none';
    this.setState({
      readOnly: true,
    });
    editAction({
      email: e.target.email.value,
      alias: e.target.alias.value,
      authorization: me.authorization,
    });
  };

  render() {
    const { me, users } = this.props;
    const { readOnly } = this.state;
    return (
      <div className="profileComponent">
        <form onSubmit={this.onSubmit} className="all">
          <Paper className="paper" elevation={2}>
            <Avatar email={me.email} styled={styledUser} avatarStyle="avatar" hover="displayFlex" />
            <div className="editBtnPosition">
              <Button
                variant="fab"
                color="primary"
                aria-label="Edit"
                className="editBtn"
                onClick={this.handleClick}
              >
                <EditIcon />
              </Button>
            </div>
            <div className="infoTxt">
              <div className="AliasDiv"> Alias </div>
              <InputForm id="alias" defaultValue={me.alias} margin="normal" readOnly={readOnly} />
              <div className="EmailDiv"> Email </div>
              <InputForm id="email" margin="normal" defaultValue={me.email} readOnly={readOnly} />
              <Button
                variant="contained"
                color="primary"
                type="submit"
                id="SubmitButton"
              >
                Valid
              </Button>
            </div>
            <Followers followers={users.users} />
          </Paper>
        </form>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
