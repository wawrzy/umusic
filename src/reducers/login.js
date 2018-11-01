// @flow

import {
  LOGIN_SUCCESS,
  LOGIN_LOAD,
  LOGIN_FAILURE,
  REGISTER_SUCCESS,
  REGISTER_LOAD,
  REGISTER_FAILURE,
  FETCH_PROFILE_SUCCESS,
  LOGOUT,
} from '../actions/auth/types';

type TLogin = {
  authorization: string,
  email: string,
  alias: string,
  status: string,
  error: string,
  userId: string,
};

const initState = {
  email: '',
  alias: '',
  authorization: '',
  status: '',
  error: '',
  userId: '',
};

export const login = (state: TLogin = initState, action: any) => {
  switch (action.type) {
    case LOGIN_LOAD:
      return {
        ...state,
        error: '',
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        error: 'Fail to login',
      };
    case LOGIN_SUCCESS:
      localStorage.setItem('jwtToken', action.payload.data.token);
      return {
        ...state,
        authorization: action.payload.data.token,
        email: action.payload.data.email,
        alias: action.payload.data.alias,
        userId: action.payload.data._id,
        error: '',
      };
    case FETCH_PROFILE_SUCCESS:
      return {
        ...state,
        email: action.payload.data.email,
        alias: action.payload.data.alias,
        userId: action.payload.data.id,
        error: '',
      };
    case LOGOUT:
      return {
        ...state,
        authorization: '',
      };
    default:
      return state;
  }
};

export const register = (state: TLogin = initState, action: any) => {
  switch (action.type) {
    case REGISTER_LOAD:
      return {
        ...state,
        error: '',
      };
    case REGISTER_FAILURE:
      return {
        ...state,
        error: 'Error',
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        status: 'Registration successful',
        error: '',
      };
    default:
      return state;
  }
};
