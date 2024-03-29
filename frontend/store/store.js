import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReducer from '../reducers/root_reducer';
import thunk from 'redux-thunk';

export default (preloadedState = {}) => createStore(
    rootReducer, preloadedState,
    applyMiddleware(thunk) // removed logger for production purpose
);