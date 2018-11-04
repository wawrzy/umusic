// @flow

import {
  FETCH_FOLLOWING_SUCCESS,
  FETCH_USER_ERROR,
  FETCH_USER_LOAD,
  FETCH_USER_SUCCESS,
} from '../actions/user/types';

type User = {
  email: string,
  alias: string,
  id: string,
};

type TUser = {
  user: ?User,
  users: User[],
  following: User[],
  error: string,
};

const initState = {
  user: null,
  error: '',
  users: [],
  following: [],
};

const user = (state: TUser = initState, action: any) => {
  switch (action.type) {
    case FETCH_USER_ERROR:
      window.location = `${window.origin}/404`;
      return {
        ...state,
        error: 'Fail to fetch user',
      };
    case FETCH_USER_LOAD:
      return {
        ...state,
        error: '',
      };
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        user: {
          email: action.payload.data.email,
          alias: action.payload.data.alias,
          id: action.payload.data.id,
        },
        error: '',
      };
    case FETCH_FOLLOWING_SUCCESS:
      return {
        ...state,
        error: '',
        following: action.payload.data,
      };
    default:
      return state;
  }
};

export default user;
