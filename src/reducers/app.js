const initState = {
  app: 'Test',
};

export default function app(state = initState, action) {
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
