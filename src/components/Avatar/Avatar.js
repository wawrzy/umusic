// @flow

import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import '../../containers/Profile/Profile.css';

type Props = {
  cN: string,
  user: string,
  img: string,
}

const MyAvatar = ({ cN, user, img }: Props) => (
  <Avatar
    className={cN}
    alt={user}
    src={img}
  />
);

export default MyAvatar;
