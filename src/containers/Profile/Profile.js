// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import Typography from '@material-ui/core/Typography';
import PeopleIcon from '@material-ui/icons/People';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';

import { editUser } from '../../actions/users/users';
import { fetchProfile } from '../../actions/auth/login';
import {
  fetchUser,
  fetchFollowing,
  followUser,
  unfollowUser,
} from '../../actions/user/searchUsers';
import Avatar from '../../components/Avatar/Avatar';
import InputForm from '../../components/Input/InputForm';
import Followers from './Followers';

import './Profile.css';

type User = {
  alias: string,
  email: string,
  id: string,
};

type Me = {
  alias: string,
  email: string,
  authorization: string,
  userId: string,
  follow: string[],
};

type Props = {
  editAction: Function,
  getUser: Function,
  me: Me,
  following: User[],
  user: User,
  readOnly: boolean,
  getFollows: Function,
  follow: Function,
  unfollow: Function,
  getMe: Function,
};

type State = {
  editing: boolean,
};

const mapDispatchToProps = dispatch => ({
  editAction: item => dispatch(editUser(item)),
  getUser: (authorization, id) => dispatch(fetchUser(authorization, id)),
  getFollows: (authorization, id) => dispatch(fetchFollowing(authorization, id)),
  follow: (authorization, id) => dispatch(followUser(authorization, id)),
  unfollow: (authorization, id) => dispatch(unfollowUser(authorization, id)),
  getMe: authorization => dispatch(fetchProfile(authorization)),
});

const mapStateToProps = state => ({
  user: state.user.user,
  following: state.user.following,
  me: state.login,
  readOnly: state.user.user ? state.user.user.id !== state.login.userId : true,
});

const styledUser = { borderRadius: '100px', width: '100px', height: '100px' };

class Profile extends Component<Props, State> {
  state = {
    editing: false,
  };

  componentDidMount() {
    const { getUser, me, getFollows } = this.props;

    const userId = window.location
      .toString()
      .split('/')
      .reverse()[0];

    getUser(me.authorization, userId);
    getFollows(me.authorization, userId);
  }

  componentDidUpdate() {
    const { user, me, getUser, getFollows } = this.props;

    const userId = window.location
      .toString()
      .split('/')
      .reverse()[0];

    if (user && user.id !== userId) {
      getUser(me.authorization, userId);
      getFollows(me.authorization, userId);
    }
  }

  handleEdit = () => {
    const { editing } = this.state;

    this.setState({ editing: !editing });
  };

  handleFollow = () => {
    const { me, user, unfollow, follow, getMe } = this.props;
    const following = me.follow.indexOf(user.id) !== -1;

    const promise = following
      ? unfollow(me.authorization, user.id)
      : follow(me.authorization, user.id);

    promise.then(() => getMe(me.authorization));
  };

  onSubmit = e => {
    const { editAction, me, getUser } = this.props;
    e.preventDefault();
    const button = document.getElementById('SubmitButton');

    if (button) {
      editAction({
        email: e.target.email.value,
        alias: e.target.alias.value,
        authorization: me.authorization,
      }).then(() => {
        getUser(me.authorization, me.userId);
      });
      this.setState({ editing: false });
    }
  };

  renderFollow = () => {
    const { me, user } = this.props;

    const following = me.follow.indexOf(user.id) !== -1;

    return following ? <PeopleOutlineIcon /> : <PeopleIcon />;
  };

  renderAction = () => {
    const { readOnly } = this.props;

    const icon = readOnly ? this.renderFollow() : <EditIcon />;
    const onClick = readOnly ? this.handleFollow : this.handleEdit;

    return (
      <div className="editBtnPosition">
        <Button variant="fab" color="primary" className="editBtn" onClick={onClick}>
          {icon}
        </Button>
      </div>
    );
  };

  renderEdit = () => {
    const { user, readOnly } = this.props;
    const { alias, email } = user;

    return (
      <div className="infoTxt">
        <InputForm
          id="alias"
          name="Alias"
          defaultValue={alias}
          margin="normal"
          readOnly={readOnly}
          className="InputWidth"
        />
        <InputForm
          id="email"
          name="Email"
          margin="normal"
          defaultValue={email}
          readOnly={readOnly}
          className="InputWidth"
        />
        <Button variant="contained" color="primary" type="submit" id="SubmitButton">
          Valid
        </Button>
      </div>
    );
  };

  renderProfile = () => {
    const { user } = this.props;
    const { alias, email } = user;

    return (
      <div className="ProfileInfos">
        <Typography className="ProfileAlias" variant="h4">
          {alias}
        </Typography>
        <Typography className="ProfileEmail" variant="h5">
          {email}
        </Typography>
      </div>
    );
  };

  render() {
    const { following, user } = this.props;
    const { editing } = this.state;

    if (!user) return null;

    const { email } = user;

    return (
      <React.Fragment>
        <div className="CoverPicture" />
        <div className="ProfileContainer">
          <div className="Paper">
            <form onSubmit={this.onSubmit} className="all">
              <Paper className="PaperShadow" elevation={2}>
                <Avatar
                  email={email}
                  styled={styledUser}
                  avatarStyle="avatar"
                  hover="displayFlex"
                />
                {this.renderAction()}
                {editing ? this.renderEdit() : this.renderProfile()}
                <Followers followers={following || []} />
              </Paper>
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Profile);
