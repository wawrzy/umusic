// @flow

import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import './Avatar.css';

type Props = {
  cN: string,
  user: string,
  img: string,
};

class MyAvatar extends Component<Props> {
  handleClick = () => {
    console.log('zezeaeazaze');
  };

  render() {
    const { cN, user, img } = this.props;
    return (
      <div onClick={this.handleClick} role="presentation" className="hoverAvatar">
        <Avatar className={cN} alt={user} src={img} />
      </div>
    );
  }
}

export default MyAvatar;
