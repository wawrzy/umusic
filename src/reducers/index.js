import { combineReducers } from 'redux';
import { login, register } from './login';
import { createRoom, getRoom } from './room';
import getUsers from './users';

export default combineReducers({
  login,
  register,
  createRoom,
  getRoom,
  getUsers,
});
