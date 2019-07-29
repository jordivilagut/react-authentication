import agent from "../api/agent";
import {LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, UPDATE_FORM} from "./constants/userConstants";

export const updateUser = input => ({
    type: UPDATE_FORM,
    key: input.name,
    value: input.value
});

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