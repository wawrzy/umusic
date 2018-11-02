// @flow

import { NEXT_MUSIC, PAUSE_MUSIC, PLAY_MUSIC } from './types';

export function next(authorization: string) {
  return {
    type: NEXT_MUSIC,
    payload: {
      data: {
        authorization,
      },
      event: 'nextmusic',
    },
  };
}

export function pause(authorization: string) {
  return {
    type: PAUSE_MUSIC,
    payload: {
      data: {
        authorization,
      },
      event: 'pausemusic',
    },
  };
}

export function play(authorization: string) {
  return {
    type: PLAY_MUSIC,
    payload: {
      data: {
        authorization,
      },
      event: 'continuemusic',
    },
  };
}
