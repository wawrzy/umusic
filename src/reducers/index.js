import { combineReducers } from 'redux';
import { login, register } from './login';
import createRoom from './createRoom';

export default combineReducers({
  login,
  register,
  createRoom,
});
