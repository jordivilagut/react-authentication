import thunk from 'redux-thunk';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import {user} from "../reducers/user";
import {userForm} from "../reducers/userForm";

export const store = createStore(
    combineReducers({
        user: user,
        userForm: userForm
    }),
    applyMiddleware(thunk));
