// @flow

import React from 'react';
import Typography from '@material-ui/core/Typography';
import Avatar from '../../components/Avatar/Avatar';
import './Profile.css';

type Props = {
  followers: [
    {
      alias: string,
      email: string,
      id: string,
    },
  ],
};

const styledFollow = { borderRadius: '100px', width: '50px', height: '50px' };

const Followers = ({ followers }: Props) => (
  <div>
    <Typography className="list">Followers</Typography>
    <div className="listAvatar">
      {followers.map(index => (
        <Avatar
          key={index.id}
          hover="hoverAvatar"
          email={index.email}
          link={index.id}
          styled={styledFollow}
        />
      ))}
    </div>
  </div>
);

export default Followers;
