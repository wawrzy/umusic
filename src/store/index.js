import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import reducers from '../reducers';

const client = axios.create({
  baseURL: 'http://url.com',
  responseType: 'json',
});

const middleware = applyMiddleware(thunkMiddleware, logger, axiosMiddleware(client));

const store = createStore(reducers, middleware);

export default store;
