import {
    LOGIN_FAILURE,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    SIGNUP_FAILURE,
    SIGNUP_REQUEST,
    SIGNUP_SUCCESS
} from "../actions/constants/userConstants";

const initialState = {
    isLogged: false,
    user: {}
};

export const user = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {...state};
        case LOGIN_SUCCESS:
            return {...state};
        case LOGIN_FAILURE:
            return {...initialState};
        case SIGNUP_REQUEST:
            return {...state};
        case SIGNUP_SUCCESS:
            return {...state};
        case SIGNUP_FAILURE:
            return {...initialState};
        default:
            return state;
    }
};