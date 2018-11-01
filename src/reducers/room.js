// @flow

import { JOIN_ROOM } from '../actions/room/types';

const initState = {};

const room = (state: {} = initState, action: any) => {
  switch (action.type) {
    case JOIN_ROOM:
      return state;
    default:
      return state;
  }
};

export default room;
