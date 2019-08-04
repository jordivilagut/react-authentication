import thunk from 'redux-thunk';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import {authentication} from "../reducers/authentication";
import {userForm} from "../reducers/userForm";

export const store = createStore(
    combineReducers({
        authentication: authentication,
        userForm: userForm
    }),
    applyMiddleware(thunk));
