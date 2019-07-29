import {generalForm} from "./generalForm";

const initialState = {
    username: '',
    password: ''
};

export const userForm = (state = initialState, action) => {
    return generalForm(initialState, state, action);
};