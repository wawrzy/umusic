// @flow

import {
  CREATE_ROOM_SUCCESS,
  CREATE_ROOM_LOAD,
  CREATE_ROOM_FAILURE,
} from '../actions/room/types';

type TCreateRoom = {
  status: string,
};

const initState = {
  status: '',
};

const createRoom = (state: TCreateRoom = initState, action: any) => {
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

export default createRoom;
