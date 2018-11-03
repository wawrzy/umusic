// @flow

import { LEAVE_ROOM } from './types';

export default function leaveRoom(authorization: string) {
  return {
    type: LEAVE_ROOM,
    payload: {
      data: {
        authorization,
      },
      event: 'leaveroom',
    },
  };
}
