import { combineReducers } from 'redux';
import { login, register } from './login';
import { createRoom, getRoom, joinRoom } from './room';
import chat from './chat';
import user from './user';

export default combineReducers({
  login,
  register,
  createRoom,
  getRoom,
  joinRoom,
  chat,
  user,
});
