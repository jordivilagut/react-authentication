import thunk from 'redux-thunk';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import {userForm} from "../reducers/userForm";

export const store = createStore(
    combineReducers({user: userForm}),
    applyMiddleware(thunk));
