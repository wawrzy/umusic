// @flow

import {
  GET_USERS_SUCCESS,
  GET_USERS_LOAD,
  GET_USERS_FAILURE,
} from './types';

type dataType = {
  authorization: string,
};

export function getUsers(authorization: dataType) {
  return {
    types: [GET_USERS_LOAD, GET_USERS_SUCCESS, GET_USERS_FAILURE],
    payload: {
      request: {
        method: 'get',
        url: '/users',
        headers: { Authorization: authorization },
      },
    },
  };
}

export default getUsers;
