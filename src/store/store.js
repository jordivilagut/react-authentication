import thunk from 'redux-thunk';
import {applyMiddleware, combineReducers, createStore} from 'redux';

export const store = createStore(
    combineReducers(""),
    applyMiddleware(thunk));
