// @flow

import {
  CREATE_ROOM_SUCCESS,
  CREATE_ROOM_LOAD,
  CREATE_ROOM_FAILURE,
  GET_ROOM_SUCCESS,
  GET_ROOM_LOAD,
  GET_ROOM_FAILURE,
} from '../actions/room/types';

type TCreateRoom = {
  status: string,
};

type TGetRoom = {
  rooms: [{
     users: [],
     _id: string,
     name: string,
     createdAt: number,
     creator: {
      alias: string,
      email: string,
      id: string,
     }
    }],
  status: string,
};

const getState = {
  rooms: [{
    users: [],
    _id: '',
    name: '',
    createdAt: 0,
    creator: {
      alias: '',
      email: '',
      id: '',
    }
  }],
  status: '',
};

const createState = {
  status: '',
};

export const createRoom = (state: TCreateRoom = createState, action: any) => {
  switch (action.type) {
    case CREATE_ROOM_LOAD:
      return {
        ...state,
        status: '',
      };
    case CREATE_ROOM_FAILURE:
      return {
        ...state,
        status: 'Error on create room',
      };
    case CREATE_ROOM_SUCCESS:
      return {
        ...state,
        status: 'Success on create room',
      };
    default:
      return state;
  }
};

export const getRoom = (state: TGetRoom = getState, action: any ) => {
  switch (action.type) {
    case GET_ROOM_LOAD:
      return {
        ...state,
        status: '',
      };
    case GET_ROOM_FAILURE:
      return {
        ...state,
        status: 'Error on get rooms',
      };
    case GET_ROOM_SUCCESS:
      return {
        ...state,
        rooms: action.payload.data,
        status: 'Success on get rooms',
      };
    default:
      return state;
  }
};
