import {form} from "./form";

const initialState = {
    username: '',
    password: ''
};

export const userForm = (state = initialState, action) => {
    return form(state, action);
};