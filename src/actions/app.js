// @flow

export default function updateApp(app: string) {
  return {
    type: 'APP_TEST',
    payload: {
      app,
    },
  };
}
