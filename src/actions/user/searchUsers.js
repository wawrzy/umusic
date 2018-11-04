// @flow

import {
  FETCH_FOLLOWING_ERROR,
  FETCH_FOLLOWING_LOAD,
  FETCH_FOLLOWING_SUCCESS,
  FOLLOW_USER_ERROR,
  FOLLOW_USER_LOAD,
  FOLLOW_USER_SUCCESS,
  FETCH_USER_ERROR,
  FETCH_USER_LOAD,
  UNFOLLOW_USER_ERROR,
  UNFOLLOW_USER_LOAD,
  UNFOLLOW_USER_SUCCESS,
  FETCH_USER_SUCCESS,
} from './types';

export function followUser(authorization: string, userId: string) {
  return {
    types: [FOLLOW_USER_LOAD, FOLLOW_USER_SUCCESS, FOLLOW_USER_ERROR],
    payload: {
      request: {
        method: 'post',
        url: '/users/follow',
        headers: { Authorization: authorization },
        data: {
          userId,
        },
      },
    },
  };
}

export function unfollowUser(authorization: string, userId: string) {
  return {
    types: [UNFOLLOW_USER_LOAD, UNFOLLOW_USER_SUCCESS, UNFOLLOW_USER_ERROR],
    payload: {
      request: {
        method: 'post',
        url: '/users/unfollow',
        headers: { Authorization: authorization },
        data: {
          userId,
        },
      },
    },
  };
}

export function fetchFollowing(authorization: string, userId: string) {
  return {
    types: [FETCH_FOLLOWING_LOAD, FETCH_FOLLOWING_SUCCESS, FETCH_FOLLOWING_ERROR],
    payload: {
      request: {
        method: 'get',
        url: `/users/followers/${userId}`,
        headers: { Authorization: authorization },
      },
    },
  };
}

export function fetchUser(authorization: string, id: string) {
  return {
    types: [FETCH_USER_LOAD, FETCH_USER_SUCCESS, FETCH_USER_ERROR],
    payload: {
      request: {
        method: 'get',
        url: `/users/${id}`,
        headers: { Authorization: authorization },
      },
    },
  };
}
