/** *************************************
** O-rizon development
** Created by Alexy Hostetter
** 26/10/18 - 21:07
** Avatar.js
** 2018 - All rights reserved
************************************** */

// @flow

import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import './Profile.css';

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
