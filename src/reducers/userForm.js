import {CLEAR_FORM, UPDATE_FORM} from "../actions/constants/userConstants";

const initialState = {
    username: '',
    password: ''
};

export const userForm = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_FORM:
            return {...state, [action.key]: action.value};
        case CLEAR_FORM:
            return {...initialState};
        default:
            return state;
    }
};