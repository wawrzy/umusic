// @flow

type TAppState = {
  app: string,
};

const initState = {
  app: 'Test',
};

export default function app(state: TAppState = initState, action: any) {
  switch (action.type) {
    case 'APP_TEST':
      return {
        ...state,
        app: action.payload.app,
      };
    default:
      return state;
  }
}
