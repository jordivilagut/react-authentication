import {
    LOGIN_FAILURE,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGOUT,
    SIGNUP_FAILURE,
    SIGNUP_REQUEST,
    SIGNUP_SUCCESS
} from "../actions/constants/userConstants";

let loggedUser = localStorage.getItem('user');
const initialState = loggedUser ? { isLogged: true, user: loggedUser } : {};

export const authentication = (state = initialState, action) => {

    console.log("user state", action.type, state);

    switch (action.type) {
        case LOGIN_REQUEST:
            return {...state, isLogged: false};
        case LOGIN_SUCCESS:
            return {isLogged: true, user: action.user};
        case LOGIN_FAILURE:
            return {};
        case SIGNUP_REQUEST:
            return {...state, isLogged: false};
        case SIGNUP_SUCCESS:
            return {isLogged: true, user: action.user};
        case SIGNUP_FAILURE:
            return {};
        case LOGOUT:
            return {};
        default:
            return {...state};
    }
};