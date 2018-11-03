// @flow

import {
  GET_USERS_SUCCESS,
  GET_USERS_LOAD,
  GET_USERS_FAILURE,
  EDIT_USERS_SUCCESS,
  EDIT_USERS_LOAD,
  EDIT_USERS_FAILURE,
} from '../actions/users/types';

type TGetUsers = {
  users: [{
    alias: string,
    email: string,
    id: string,
  }],
  status: string,
};

type TEditUser = {
  status: string,
}

const getUsersState = {
  users: [{
    alias: '',
    email: '',
    id: '',
  }],
  status: '',
};

const editUserState = {
  status: '',
};

export const getUsers = (state: TGetUsers = getUsersState, action: any) => {
  switch (action.type) {
    case GET_USERS_LOAD:
      return {
        ...state,
        status: '',
      };
    case GET_USERS_FAILURE:
      return {
        ...state,
        status: 'Error on get users',
      };
    case GET_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload.data,
        status: 'Success on get users',
      };
    default:
      return state;
  }
};

export const editUser = (state: TEditUser = editUserState, action: any) => {
  switch (action.type) {
    case EDIT_USERS_LOAD:
      return {
        ...state,
        status: '',
      };
    case EDIT_USERS_FAILURE:
      return {
        ...state,
        status: 'Error on edit users',
      };
    case EDIT_USERS_SUCCESS:
      return {
        ...state,
        status: 'Success on edit users',
      };
    default:
      return state;
  }
};