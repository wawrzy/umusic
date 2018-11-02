// @flow

import { GET_MESSAGE_LOAD, GET_MESSAGE_SUCCESS, GET_MESSAGE_ERROR } from './types';

export default function getMessages(authorization: string, roomId: string) {
  return {
    types: [GET_MESSAGE_LOAD, GET_MESSAGE_SUCCESS, GET_MESSAGE_ERROR],
    payload: {
      request: {
        method: 'get',
        url: `/chat/messages/${roomId}`,
        headers: { Authorization: authorization },
      },
    },
  };
}
