// @flow

import { LOGIN_SUCCESS, FETCH_PROFILE_SUCCESS, LOGIN_LOAD, LOGIN_FAILURE, LOGOUT } from './types';

type loginData = {
  email: string,
  password: string,
};

export function login(data: loginData) {
  return {
    types: [LOGIN_LOAD, LOGIN_SUCCESS, LOGIN_FAILURE],
    payload: {
      request: {
        method: 'post',
        url: '/auth/signin',
        data: {
          ...data,
        },
      },
    },
  };
}

export function setupSession(authorization: string) {
  return {
    type: LOGIN_SUCCESS,
    LOGOUT,
    payload: {
      data: {
        token: authorization,
      },
    },
  };
}

export function fetchProfile(authorization: string) {
  return {
    types: [LOGIN_LOAD, FETCH_PROFILE_SUCCESS, LOGIN_FAILURE],
    payload: {
      request: {
        method: 'get',
        url: '/users/me',
        headers: { Authorization: authorization },
      },
    },
  };
}
