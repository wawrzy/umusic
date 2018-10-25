// @flow

import { REGISTER_SUCCESS, REGISTER_LOAD, REGISTER_FAILURE } from './types';

type dataType = {
  email: string,
  password: string,
  alias: string,
};

export function register(data: dataType) {
  return {
    types: [REGISTER_LOAD, REGISTER_SUCCESS, REGISTER_FAILURE],
    payload: {
      request: {
        method: 'post',
        url: '/auth/signup',
        data: {
          email: data.email,
          password: data.password,
          alias: data.alias,
        },
      },
    },
  };
}

export default register;
