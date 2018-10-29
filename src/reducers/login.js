// @flow

import axios from 'axios';
import {
  LOGIN_SUCCESS,
  LOGIN_LOAD,
  LOGIN_FAILURE,
  REGISTER_SUCCESS,
  REGISTER_LOAD,
  REGISTER_FAILURE,
} from '../actions/auth/types';

type TLogin = {
  loginData: string,
};

const initState = {
  loginData: '',
};


export const login = (state: TLogin = initState, action: any) => {
  switch (action.type) {
    case LOGIN_LOAD:
      return {
        loginData: '',
      };
    case LOGIN_FAILURE:
      return {
        loginData: '',
      };
    case LOGIN_SUCCESS:
      localStorage.setItem('jwtToken', action.payload.data.token);
      axios.defaults.headers.common.authorization = `${action.payload.data.token}`;
      return {
        loginData: action.payload.data.token,
      };
    default:
      return state;
  }
};

export const register = (state: TLogin = initState, action: any) => {
  switch (action.type) {
    case REGISTER_LOAD:
      return {
        loginData: '',
      };
    case REGISTER_FAILURE:
      return {
        loginData: 'Error',
      };
    case REGISTER_SUCCESS:
      return {
        loginData: 'Registration successful',
      };
    default:
      return state;
  }
};
