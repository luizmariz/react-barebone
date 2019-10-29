import thunk from 'redux-thunk';
import logger from './logger';
import { applyMiddleware } from 'redux';

// Don't forget to comment logger-middleware before production build
export default applyMiddleware(
  thunk,
  logger
);