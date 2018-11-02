// @flow

import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';

import { createRoom } from '../../actions/room/create';
import InputForm from '../../components/Input/InputForm';
import img from '../../assets/image/wave.png';
import './Home.css';

type Props = {
  createAction: Function,
  authorization: string,
};

const mapStateToProps = state => ({
  authorization: state.login.authorization,
});

const mapDispatchToProps = dispatch => ({
  createAction: item => dispatch(createRoom(item)),
});

class Home extends Component<Props> {
  onSubmit = e => {
    const { createAction, authorization } = this.props;
    e.preventDefault();
    createAction({
      name: e.target.name.value,
      password: e.target.password.value,
      authorization,
    });
  };

  render() {
    return (
      <div>
        <div className="ImageBackground" />
        <form className="FormPosition" onSubmit={this.onSubmit}>
          <div className="DisplayFlexColumn">
            <InputForm
              id="name"
              name="Name of the Room"
              type="default"
              autoComplete="off"
            />
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
)(Home);
