// @flow

import { GET_MESSAGE_ERROR, GET_MESSAGE_LOAD, GET_MESSAGE_SUCCESS } from '../actions/chat/types';

type Chat = {
  messages: [],
  error: string,
};

const initState = {
  messages: [],
  error: '',
};

const chat = (state: Chat = initState, action: any) => {
  switch (action.type) {
    case GET_MESSAGE_ERROR:
      return {
        ...state,
        error: 'Fail to fetch messages',
      };
    case GET_MESSAGE_LOAD:
      return {
        ...state,
        error: '',
      };
    case GET_MESSAGE_SUCCESS:
      return {
        ...state,
        messages: action.payload.data,
        error: '',
      };
    default:
      return state;
  }
};

export default chat;
