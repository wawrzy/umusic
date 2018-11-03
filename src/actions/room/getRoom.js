// @flow

import { GET_ROOM_SUCCESS, GET_ROOM_LOAD, GET_ROOM_FAILURE } from './types';

type dataType = {
  authorization: string,
};

export function getRoom(authorization: dataType, query: string = '') {
  return {
    types: [GET_ROOM_LOAD, GET_ROOM_SUCCESS, GET_ROOM_FAILURE],
    payload: {
      request: {
        method: 'get',
        url: `/room/all${query}`,
        headers: { Authorization: authorization },
      },
    },
  };
}

export default getRoom;
