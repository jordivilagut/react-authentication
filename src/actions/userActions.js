import agent from "../api/agent";
import {
    LOGIN_FAILURE,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    SIGNUP_FAILURE,
    SIGNUP_REQUEST,
    SIGNUP_SUCCESS,
} from "./constants/userConstants";

export function login(user) {

    return function (dispatch) {

        dispatch(request(user));

        return agent.User.login(user).then(
            user => dispatch(success(user)),
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