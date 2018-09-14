export default function updateApp(app) {
  return {
    type: 'APP_TEST',
    payload: {
      app,
    },
  };
}
