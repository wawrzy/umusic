// @flow

import React, { Component } from 'react';
import Gravatar from 'react-gravatar';
import { withRouter } from 'react-router-dom';
import './Avatar.css';

type Props = {
  email: string,
  link: string,
  history: Function,
  hover: string,
  avatarStyle: string,
};

class MyAvatar extends Component<Props> {
  handleClick = () => {
    const { link, history } = this.props;
    history.push(`/profile/${link}`);
  };

  render() {
    const { email, hover, styled, avatarStyle } = this.props;
    return (
      <div onClick={this.handleClick} role="presentation" className={hover}>
        <Gravatar email={email} style={styled} className={avatarStyle} />
      </div>
    );
  }
}

export default withRouter(MyAvatar);
