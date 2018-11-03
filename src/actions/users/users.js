// @flow

import {
  GET_USERS_SUCCESS,
  GET_USERS_LOAD,
  GET_USERS_FAILURE,
  EDIT_USERS_SUCCESS,
  EDIT_USERS_LOAD,
  EDIT_USERS_FAILURE,
} from './types';

type dataType = {
  alias: string,
  email: string,
  authorization: string,
};

type authorizationType = {
  authorization: string,
};

export function getUsers(authorization: authorizationType) {
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

export function editUser(data: dataType) {
  return {
    types: [EDIT_USERS_LOAD, EDIT_USERS_SUCCESS, EDIT_USERS_FAILURE],
    payload: {
      request: {
        method: 'put',
        url: '/users/me',
        headers: { Authorization: data.authorization },
        data: {
          alias: data.alias,
          email: data.email,
        }
      },
    },
  };
}
