// @flow

import { CURRENT_MUSIC } from './types';

export default function currentMusic(authorization: string) {
  return {
    type: CURRENT_MUSIC,
    payload: {
      data: {
        authorization,
      },
      event: 'currentmusic',
    },
  };
}
