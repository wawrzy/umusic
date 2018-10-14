// @flow

import { SUCCESS, LOAD, FAILURE } from '../actions/login/types';

type TLogin = {

};

const initState = {
  loginData: [],
};

const login = (state: TLogin = initState, action: any) => {
  switch (action.type) {
    case LOAD:
      return {
        ...state,
      };
    case FAILURE:
      return {
        ...state,
      };
    case SUCCESS:
      return {
        ...state, loginData: [action.payload.data],
      };
    default:
      return state;
  }
};

export default login;
