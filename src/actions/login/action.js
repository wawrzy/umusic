// @flow

import { SUCCESS, LOAD, FAILURE } from './types';

type dataType = {
  email: string,
  password: string,
};

export function login(data: dataType) {
  return {
    types: [LOAD, SUCCESS, FAILURE],
    payload: {
      request: {
        method: 'post',
        url: '/auth/login',
        data: {
          email: data.email,
          password: data.password,
        },
      },
    },
  };
}

export const setupSession = (userToken: string) => {
  console.log(userToken);
  localStorage.setItem('jwtToken', userToken);
  return {
    types: [LOAD, SUCCESS, FAILURE],
    payload: {
      request: {
        data: {
          token: userToken,
        },
      },
    },
  };
};
