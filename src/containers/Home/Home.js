// @flow

import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { withNamespaces } from 'react-i18next';

import { createRoom } from '../../actions/room/create';
import joinRoom from '../../actions/room/joinRoom';
import InputForm from '../../components/Input/InputForm';

import './Home.css';

type Props = {
  createAction: Function,
  authorization: string,
  join: Function,
  t: Function,
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
      password: '',
      authorization,
    }).then(room => {
      if (room.payload) join(room.payload.data._id, authorization, '');
    });
  };

  render() {
    const { t } = this.props;

    return (
      <div>
        <div className="ImageBackground" />
        <form className="FormPosition" onSubmit={this.onSubmit}>
          <div className="DisplayFlexColumn">
            <InputForm id="name" name={t('roomName')} type="default" autoComplete="off" />
          </div>
          <div className="ButtonAlign">
            <Button variant="contained" color="primary" type="submit">
              {t('createRoom')}
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
)(withRouter(withNamespaces('room')(Home)));
