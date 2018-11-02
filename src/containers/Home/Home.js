// @flow

import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { createRoom } from '../../actions/room/create';
import joinRoom from '../../actions/room/joinRoom';
import InputForm from '../../components/Input/InputForm';
import './Home.css';

type Props = {
  createAction: Function,
  authorization: string,
  join: Function,
};

const mapStateToProps = state => ({
  authorization: state.login.authorization,
});

const mapDispatchToProps = dispatch => ({
  createAction: item => dispatch(createRoom(item)),
  join: (roomId, authorization, passsword) => dispatch(joinRoom(roomId, authorization, passsword)),
});

class Home extends Component<Props> {
  onSubmit = e => {
    const { createAction, authorization, join } = this.props;
    e.preventDefault();

    createAction({
      name: e.target.name.value,
      password: e.target.password.value,
      authorization,
    }).then(room => {
      if (room.payload) join(room.payload.data._id, authorization, '');
    });
  };

  render() {
    return (
      <div>
        <div className="ImageBackground" />
        <form className="FormPosition" onSubmit={this.onSubmit}>
          <div className="DisplayFlexColumn">
            <InputForm id="name" name="Name of the Room" type="default" autoComplete="off" />
            <InputForm
              id="password"
              name="Password (optional)"
              type="password"
              autoComplete="off"
            />
          </div>
          <div className="ButtonAlign">
            <Button variant="contained" color="primary" type="submit">
              Create Room
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(Home));
