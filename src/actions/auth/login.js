// @flow

import { LOGIN_SUCCESS, LOGIN_LOAD, LOGIN_FAILURE } from './types';

type dataType = {
  email: string,
  password: string,
};

export function login(data: dataType) {
  return {
    types: [LOGIN_LOAD, LOGIN_SUCCESS, LOGIN_FAILURE],
    payload: {
      request: {
        method: 'post',
        url: '/auth/signin',
        data: {
          email: data.email,
          password: data.password,
        },
      },
    },
  };
}

export function setupSession(userToken: string) {
  return {
    type: LOGIN_SUCCESS,
    payload: {
      data: {
        token: userToken,
      },
    },
  };
}
