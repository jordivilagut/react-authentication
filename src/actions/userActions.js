import {
    LOGIN_FAILURE,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGOUT,
    SIGNUP_FAILURE,
    SIGNUP_REQUEST,
    SIGNUP_SUCCESS,
} from "./constants/userConstants";
import {usersService} from "../services/usersService";
import {history} from '../helpers/history';

export function login(userForm) {

    return function (dispatch) {

        dispatch(request(userForm));

        return usersService.login(userForm.username, userForm.password).then(
            user => {
                dispatch(success(user));
                redirect()
            },
            error => dispatch(failure(error))
        );
    };

    function request(user) { return { type: LOGIN_REQUEST, user } }
    function success(user) { return { type: LOGIN_SUCCESS, user } }
    function failure(error) { return { type: LOGIN_FAILURE, error } }
}

export function signup(userForm) {

    return function (dispatch) {

        dispatch(request(userForm));

        return usersService.signup(userForm.username, userForm.password).then(
            user => {
                dispatch(success(user));
                redirect()
            },
            error => dispatch(failure(error))
        );
    };

    function request(user) { return { type: SIGNUP_REQUEST, user } }
    function success(user) { return { type: SIGNUP_SUCCESS, user } }
    function failure(error) { return { type: SIGNUP_FAILURE, error } }
}

function redirect() {
    history.push('/');
    window.location.reload(); //TODO - React should care about reloading
}

export function logout() {
    usersService.logout();
    return { type: LOGOUT };
}