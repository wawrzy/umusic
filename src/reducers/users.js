// @flow

import {
  GET_USERS_SUCCESS,
  GET_USERS_LOAD,
  GET_USERS_FAILURE,
  EDIT_USERS_SUCCESS,
  EDIT_USERS_LOAD,
  EDIT_USERS_FAILURE,
  GET_USERS_SEARCH_SUCCESS,
} from '../actions/users/types';

type TGetUsers = {
  users: [
    {
      alias: string,
      email: string,
      id: string,
    },
  ],
  status: string,
  suggests: string[],
};

type TEditUser = {
  status: string,
};

const getUsersState = {
  users: [
    {
      alias: '',
      email: '',
      id: '',
    },
  ],
  status: '',
  suggests: [],
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
    case GET_USERS_SEARCH_SUCCESS:
      return {
        ...state,
        suggests: action.payload.data.map(({ alias, id }) => ({ label: id, value: alias })),
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
