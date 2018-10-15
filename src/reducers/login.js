// @flow

import { SUCCESS, LOAD, FAILURE } from '../actions/login/types';

type TLogin = {
  loginData: string,
};

const initState = {
  loginData: '',
};


const login = (state: TLogin = initState, action: any) => {
  switch (action.type) {
    case LOAD:
      return {
        loginData: '',
      };
    case FAILURE:
      return {
        loginData: '',
      };
    case SUCCESS:
      localStorage.setItem('jwtToken', action.payload.data.token);
      return {
        loginData: action.payload.data.token,
      };
    default:
      return state;
  }
};

export default login;
