import {UPDATE_FORM} from "../actions/constants/formConstants";

export const form = (state, action) => {
    switch (action.type) {
        case UPDATE_FORM:
            return {...state, [action.key]: action.value};
        default:
            return state;
    }
};