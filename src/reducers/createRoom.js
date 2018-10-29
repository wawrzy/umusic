// @flow

import {
  CREATE_ROOM_SUCCESS,
  CREATE_ROOM_LOAD,
  CREATE_ROOM_FAILURE,
} from '../actions/room/types';

type TCreateRoom = {
  roomName: string,
  users: [{
      alias: string,
      id: string,
      email: string,
  }],
  creator: {
    alias: string,
    id: string,
    email: string,
  },
  roomId: string,
  status: string,
};

const initState = {
  roomName: '',
  users: [{
    alias: '',
    id: '',
    email: '',
  }],
  creator: {
    alias: '',
    id: '',
    email: '',
  },
  roomId: '',
  status: '',
};

const createRoom = (state: TCreateRoom = initState, action: any) => {
  switch (action.type) {
    case CREATE_ROOM_LOAD:
      return {
        state
      };
    case CREATE_ROOM_FAILURE:
      console.log('okkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk', action.payload);
      return {
        ...state,
        status: 'Error on create room',
      };
    case CREATE_ROOM_SUCCESS:
      return {
        ...state,
        roomName: action.payload.data.name,
      };
    default:
      return state;
  }
};

export default createRoom;
