import { combineReducers } from 'redux';
import { login, register } from './login';

export default combineReducers({
  login,
  register,
});
