// @flow

import {
  SEARCH_USERS_SUCCESS,
  SEARCH_USERS_ERROR,
  SEARCH_USERS_LOAD,
  FETCH_USER_ERROR,
  FETCH_USER_LOAD,
  FETCH_USER_SUCCESS,
} from './types';

export function searchUsers(alias?: string) {
  const url = alias ? `/api/users?alias=${alias}` : '/api/users';

  return {
    types: [SEARCH_USERS_LOAD, SEARCH_USERS_SUCCESS, SEARCH_USERS_ERROR],
    payload: {
      request: {
        method: 'get',
        url,
      },
    },
  };
}

export function fetchUser(id: string) {
  return {
    types: [FETCH_USER_LOAD, FETCH_USER_SUCCESS, FETCH_USER_ERROR],
    payload: {
      request: {
        method: 'get',
        url: `/api/users/${id}`,
      },
    },
  };
}
