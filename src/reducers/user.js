// @flow

import {
  FETCH_USER_ERROR,
  FETCH_USER_LOAD,
  FETCH_USER_SUCCESS,
  SEARCH_USERS_ERROR,
  SEARCH_USERS_LOAD,
  SEARCH_USERS_SUCCESS,
} from '../actions/user/types';

type User = {
  email: string,
  alias: string,
  id: string,
};

type TUser = {
  user: ?User,
  users: User[],
  error: string,
};

const initState = {
  user: null,
  error: '',
  users: [],
};

const user = (state: TUser = initState, action: any) => {
  switch (action.type) {
    case FETCH_USER_ERROR:
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
    case SEARCH_USERS_ERROR:
      return {
        ...state,
        error: 'Fail to search users',
      };
    case SEARCH_USERS_LOAD:
      return {
        ...state,
        error: '',
      };
    case SEARCH_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload.data,
        error: '',
      };
    default:
      return state;
  }
};

export default user;
