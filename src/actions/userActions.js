import agent from "../api/agent";
import {
    LOGIN_FAILURE,
    LOGIN_REQUEST,
    LOGIN_SUCCESS, LOGOUT,
    SIGNUP_FAILURE,
    SIGNUP_REQUEST,
    SIGNUP_SUCCESS,
} from "./constants/userConstants";
import {usersService} from "../services/usersService";
import {history} from '../helpers/history';

export function login(user) {

    return function (dispatch) {

        dispatch(request(user));

        return usersService.login(user.username, user.password).then(
            user => {
                console.log("dispatching user succes", user);
                dispatch(success(user));
                history.push('/');
                window.location.reload(); //TODO - React should care about reloading
            },
            error => dispatch(failure(error))
        );
    };

    function request(user) { return { type: LOGIN_REQUEST, user } }
    function success(user) { return { type: LOGIN_SUCCESS, user } }
    function failure(error) { return { type: LOGIN_FAILURE, error } }
}

export function signup(user) {

    return function (dispatch) {

        dispatch(request(user));

        return agent.User.signup(user).then(
            user => dispatch(success(user)),
            error => dispatch(failure(error))
        );
    };

    function request(user) { return { type: SIGNUP_REQUEST, user } }
    function success(user) { return { type: SIGNUP_SUCCESS, user } }
    function failure(error) { return { type: SIGNUP_FAILURE, error } }
}

export function logout() {
    usersService.logout();
    return { type: LOGOUT };
}