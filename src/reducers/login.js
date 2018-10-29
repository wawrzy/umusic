// @flow

import {
  LOGIN_SUCCESS,
  LOGIN_LOAD,
  LOGIN_FAILURE,
  REGISTER_SUCCESS,
  REGISTER_LOAD,
  REGISTER_FAILURE,
} from '../actions/auth/types';

type TLogin = {
  authorization: string,
  email: string,
  alias: string,
  status: string,
  error: string,
};

const initState = {
  email: '',
  alias: '',
  authorization: '',
  status: '',
  error: '',
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
        error: '',
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
