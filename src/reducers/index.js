import { combineReducers } from 'redux';
import { login, register } from './login';
import { createRoom, getRoom } from './room';

export default combineReducers({
  login,
  register,
  createRoom,
  getRoom,
});
