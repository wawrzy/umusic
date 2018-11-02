// @flow

import { JOIN_ROOM } from './types';

export default function joinRoom(roomId: string, authorization: string, password?: string = '') {
  return {
    type: JOIN_ROOM,
    payload: {
      data: {
        roomId,
        authorization,
        password,
      },
      event: 'joinroom',
    },
  };
}
