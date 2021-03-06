import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';

import reducers from '../reducers';
import { socketMiddleware } from '../middlewares/socket';

const isProd = process.env.REACT_APP_STAGE === 'production';

const client = axios.create({
  baseURL: isProd ? 'https://umusic-backend.herokuapp.com/api' : 'http://localhost:3100/api',
  responseType: 'json',
});

let middleware = null;

if (isProd) {
  middleware = applyMiddleware(thunkMiddleware, axiosMiddleware(client), socketMiddleware);
} else {
  middleware = applyMiddleware(thunkMiddleware, axiosMiddleware(client), logger, socketMiddleware);
}

const store = createStore(reducers, middleware);

export default store;
