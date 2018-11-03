// @flow

import { SEND_MESSAGE } from './types';

export default function sendMessage(authorization: string, message: string) {
  return {
    type: SEND_MESSAGE,
    payload: {
      data: {
        authorization,
        message,
      },
      event: 'sendmessage',
    },
  };
}
