import io from 'socket.io-client';

const socket = io('http://localhost:3100');

const socketMiddleware = () => next => action => {
  if (action === null) return null;

  if (!action.payload || !action.payload.event) {
    return next(action);
  }

  const { event, data } = action.payload;

  socket.emit(event, data);

  return next(action);
};

export default socketMiddleware;